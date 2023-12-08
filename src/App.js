
import './App.css';
import Row from './components/Row';
import request from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav';


function App() {
  return (
    
    <div className="App">
      <Nav/>
      <Banner  fetchUrl={request.fetchNetflixOriginals}/>
      
      <Row title='Netflix Originals' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Trending Movies' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={request.fetchActionMovie}/>
      <Row title='Horror' fetchUrl={request.fetchHorrorMovie}/>
      <Row title='Romantic Movies' fetchUrl={request.fetchRomanceMovie}/>
      <Row title='Documentary' fetchUrl={request.fetchDocumentaryMovie}/>
 
    </div>
  );
}

export default App;
