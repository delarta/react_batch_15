import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const url = process.env.REACT_APP_MOVIE_API;

    axios
      .get(`${url}popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <ListGroup>
        {movies.length > 0 &&
          movies.map((movie) => (
            <ListGroupItem key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}

export default MoviesList;
