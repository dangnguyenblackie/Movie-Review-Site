import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";

const App = () => {

  const [movies, setMovies] = useState();
  const getMovies = async () => {
    try {
      const response = await axios.get("/api/v1/movies");
      console.log(response.data);
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
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
