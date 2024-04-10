import React from 'react';
import {useEffect} from 'react';

// key = 6fb9896f

const API_URL = 'https://www.omdbapi.com?apikey=6fb9896f';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

    return (
        <h1>
            App
        </h1>
    );
}

export default App;