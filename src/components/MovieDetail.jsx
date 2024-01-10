import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();
  console.log(params.omdbId);

  const getOmdbData = () => {
    fetch("http://www.omdbapi.com/?apikey=2cb73588&i=" + params.imdb)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((movieData) => {
        setMovie(movieData);
      });
  };
  useEffect(() => {
    getOmdbData();
  }, []);

  return (
    <>
      <div className="text-white text-center my-5">
        <img src={movie.Search.Poster} alt="copertina film" />
        {movie ? <h3>{movie.Search.Title}</h3> : <div><Spinner /></div>}
        <p>Type - Year</p>
      </div>
    </>
  );
};

export default MovieDetail;
