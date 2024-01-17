import { useEffect, useState} from 'react';
import '../App.css';
import SearchIcon from '../search.svg';
import MovieCard from './moviecard'
// e00e87c5
const API_URL = 'http://www.omdbapi.com?apikey=e00e87c5'
const Body = (prop) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title)=> {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data  = await response.json();
      setMovies(data.Search);
    }
    useEffect(()=> {
        searchMovies('Superman');
    },
    []);
    return (
      <>
       <div className='app'>
          <h1 className='text-center'><a href="#" onClick={() => { window.location.reload() }}>MoviesApp</a></h1>
          <div className='search'>
            <input type="text"
             placeholder='Search for movies' 
             value = {searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <img src={SearchIcon} alt="icon"
            onClick={() => {searchMovies(searchTerm)}}
            />
          </div>
          {
            movies?.length >0 
            ?
            (<div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/>
              ))}
            </div>
            ) : (
              <div className="empty">
                <h2>No Movies Found</h2>
              </div>
            )
  
          }
          
       </div>
      </>
    )
}
export default Body