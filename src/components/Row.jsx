import React,{useState,useEffect} from 'react'
import tmdbAxiosinstance from '../tmdbAxiosInstance'
import './row.css'

function Row({title,fetchUrl}) {
  const [allMovies,setAllMovies]=useState([])
  // const [trending,setTrending]=useState([])
  // const [topRated,setTopRated]=useState([])
  // const [actionMovies,setActionMovies]=useState([])
  // const [comedyMovies,setComedyMovies]=useState([])
  // const [horrorMovies,setHorrorMovies]=useState([])
  // const [romanceMovies,setRomanceMovies]=useState([])
  // const [documentaryMovies,setDocumentaryMovies]=useState([])

  const base_url_img='https://image.tmdb.org/t/p/original'

  const fetchData=async ()=>{
    const response= await tmdbAxiosinstance.get(fetchUrl)
    
    setAllMovies(response.data.results)
    console.log(allMovies)
  }

  useEffect(()=>{
    fetchData()
  },[])


  console.log(allMovies)
  

  return (
    <div className='row'>
      <h1 >{title}</h1>
      <div className='movies-row'>
        {
          allMovies?.map((item)=>(
              <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="" />
          ))
          
        }
        
      </div>
    </div>
    
  )
}

export default Row