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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        // Favori durumunu kontrol et
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(data.id));
      });
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favId: string) => favId !== id))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }
    setIsFavorite(!isFavorite);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{movie.name}</h1>
        <span>
          Favoriler{" "}
          {localStorage.getItem("favorites")
            ? JSON.parse(localStorage.getItem("favorites") || "[]").length
            : 0}
        </span>
        <svg
          onClick={toggleFavorite}
          style={{
            position: "absolute",
            top: "110px",
            right: "20px",
            cursor: "pointer",
          }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 5.48283C4.73367 3.96184 7.26633 3.96184 8.82842 5.48283L9.99999 6.62357L11.1716 5.48283C12.7337 3.96184 15.2663 3.96184 16.8284 5.48283C18.3905 7.00382 18.3905 9.46983 16.8284 10.9908L9.99999 17.6395L3.17157 10.9908C1.60948 9.46983 1.60948 7.00382 3.17157 5.48283Z"
            fill={isFavorite ? "red" : "#D1D5DB"}
          />
        </svg>
      </div>
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
