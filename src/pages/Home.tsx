import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import useMobile from "../hooks/useMobile";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [filterKey, setFilterKey] = useState("");
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const isMobile = useMobile();

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

  const sortedAndFilteredMovies = movies
    .filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((movie) => {
      if (filterKey === "favorites") {
        return favorites.includes(movie.id);
      } else if (filterKey === "new") {
        return true;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortKey === "year") {
        return a.year - b.year;
      } else if (sortKey === "imdb") {
        return parseFloat(a.imdb) - parseFloat(b.imdb);
      }
      return 0;
    });

  return (
    <div>
      <Header
        onSearch={(query) => setSearchQuery(query)}
        favoritesCount={favorites.length}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Movies</h2>
        <div style={{ display: "flex", gap: "5px" }}>
          <Sort onSort={(key) => setSortKey(key)} />
          <Filter onFilter={(key) => setFilterKey(key)} />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)",
          gap: "50px",
        }}
      >
        {sortedAndFilteredMovies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{}}>
              <Movie
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={(id) => {
                  const newFavorites = favorites.includes(id)
                    ? favorites.filter((favId) => favId !== id)
                    : [...favorites, id];
                  setFavorites(newFavorites);
                  localStorage.setItem(
                    "favorites",
                    JSON.stringify(newFavorites)
                  );
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
