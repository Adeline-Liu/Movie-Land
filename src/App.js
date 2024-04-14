import React from 'react';
import {useState, useEffect} from 'react';

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";


// key = 6fb9896f

const API_URL = 'https://www.omdbapi.com?apikey=6fb9896f';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]); // initialize an empty list of movie

  useEffect(() => {
    searchMovies("Batman");
  }, []); // initialize the defualt search page with movies name containing Batman  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); // update the movie list by the search result
  };

  return ( // a component should return a React element that describes what should appear on the screen
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // e is the event object automatically passed by JavaScript when the event occurs
          // e.target refers to the DOM element the event was fired from—in this case, the input box
          // e.target.value is the current text inside the input box right after the change
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // .map() transforms each item in an array and returns a new array containing the transformed items
            // inside map, a function is defined that takes each movie object from the movies array as an argument
            // this function is executed for each item in the array
            <MovieCard movie={movie} />
            // so each movie is passed into MovieCard and gets rendered
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;