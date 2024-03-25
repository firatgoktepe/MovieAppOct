import React from "react";
import { Link } from "react-router-dom";

type MovieProps = {
  movie: {
    id: string;
    name: string;
    year: number;
    country: string;
    imdb: string;
    category: string;
    isTvSeries: boolean;
    image_url: string;
  };
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

const Movie: React.FC<MovieProps> = ({
  movie,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleFavoriteClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onToggleFavorite(movie.id);
  };
  return (
    <Link
      to={`/movies/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit", maxWidth: "250px" }}
    >
      <div>
        <div style={{ position: "relative" }}>
          <img
            src={movie.image_url}
            alt={movie.name}
            style={{ width: "100%", height: "auto" }}
          />
          <svg
            onClick={handleFavoriteClick}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
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
          {movie.isTvSeries && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "5px",
              }}
            >
              TV Series
            </span>
          )}
        </div>
        <div style={{ padding: "5px" }}>
          <div style={{ opacity: "0.4", fontSize: "14px", marginTop: "5px" }}>
            {movie.country}, {movie.year}
          </div>
          <div style={{ fontWeight: "bold", marginTop: "5px" }}>
            {movie.name}
          </div>
          <div style={{ marginTop: "5px", display: "flex", gap: "5px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt="IMDb"
              style={{ width: "30px", height: "auto", verticalAlign: "middle" }}
            />
            {movie.imdb} / 100
          </div>
          <div style={{ opacity: "0.4", fontSize: "14px", marginTop: "5px" }}>
            {movie.category}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
