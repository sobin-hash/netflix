import React from 'react'
import { useState,useEffect } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import '../components/banner.css';

function Banner({fetchUrl}) {
    const base_url_img='https://image.tmdb.org/t/p/original'

    const [allMovies,setAllMovies]=useState([])
    const fetchData=async ()=>{
        const response= await tmdbAxiosInstance.get(fetchUrl)
        
        setAllMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        console.log(Math.floor(Math.random()*response.data.results.length))
        console.log(allMovies)
      }
    
      useEffect(()=>{
        fetchData()
      },[])
      console.log(allMovies,"hi")
  return (

    <div style={{height:'600px',width:'100%',backgroundImage:`url(${base_url_img}${allMovies.backdrop_path})`,backgroundSize:'cover',}}>
        <div className='banner-content'>
            <h1>{allMovies?.name}</h1>
            <h2>{allMovies?.overview}</h2>
        </div>
    </div>


  )
}

export default Banner