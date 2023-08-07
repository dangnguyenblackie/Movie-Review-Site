import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";

const App = () => {

  const [movies, setMovies] = useState();
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home movies={movies}/>} />
      </Route>
    </Routes>
  );
};

export default App;
