import React from "react";

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
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src={movie.image_url}
          alt={movie.name}
          style={{ width: "100%", height: "auto" }}
        />
        {movie.isTvSeries && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "5px",
            }}
          >
            TV Series
          </span>
        )}
      </div>
      <div>
        <div style={{ fontWeight: "bold" }}>{movie.name}</div>
        <div>
          {movie.country}, {movie.year}
        </div>
        <div>IMDb: {movie.imdb}</div>
        <div>{movie.category}</div>
      </div>
    </div>
  );
};

export default Movie;
