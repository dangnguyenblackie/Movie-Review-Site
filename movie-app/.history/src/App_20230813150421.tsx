import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home.jsx";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import "./App.css"
import Header from "./components/header/Header.tsx";
import Trailer from "./components/trailer/Trailer.tsx";
import NotFound from "./components/notFound/NotFound.tsx";
const App = () => {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies}/>} />
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route path="/Reviews/:movieId" element={< />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
    
  );
};

export default App;
