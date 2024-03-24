import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Movie from "../components/Movie";

type MovieType = {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: string;
  category: string;
  isTvSeries: boolean;
  image_url: string;
};

const HomePage: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Header />
      <h2>Movies</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ maxWidth: "250px" }}>
              <Movie movie={movie} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
