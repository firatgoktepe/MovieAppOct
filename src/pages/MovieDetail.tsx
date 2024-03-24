import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: string;
  category: string;
  isTvSeries: boolean;
  summary: string;
  image_url: string;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.image_url} alt={movie.name} style={{ width: "100%" }} />
      <p>{movie.summary}</p>
      <hr />
      <p>IMDb: {movie.imdb}</p>
      <p>Category: {movie.category}</p>
      <p>Country: {movie.country}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieDetail;
