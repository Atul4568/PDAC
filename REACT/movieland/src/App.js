  import React, { useState, useEffect } from "react";
  import './App.css';
  import SeaechIcon from './search.svg'
  import { MovieCard } from "./MovieCard";

  const API_URL = 'http://www.omdbapi.com?apikey=9ce2d54a'; 

//API Object Refrence
  // const movie1=
  //   {
  //     "Title": "Superman & Lois",
  //     "Year": "2021–",
  //     "imdbID": "tt11192306",
  //     "Type": "series",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  // }
  

  const App=()=> {
    const [movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm]= useState(''); 

      const searchMovies= async (title)=>{
      const response= await fetch(`${API_URL}&s=${title}`)
      const data = await response.json();
      
      setMovies (data.Search);
    }
    useEffect(()=>{
      searchMovies(`Superman`)
    },[])
    return (
      <div className="app">
      <h1>Movie Hub</h1>

      <div className="search">
        <input placeholder="Search  for movies" 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value) }
        />
        <img src={SeaechIcon} 
        alt="search" 
        onClick={()=> searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 
        ? (
      <div className="container">
        {movies.map((movie)=>(<MovieCard movie={movie}/>
        ))}
      </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      </div>
    );
  }

  export default App;


  