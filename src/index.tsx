import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
