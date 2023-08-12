import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home.jsx";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import "./App.css"
import Header from "./components/header/Header.tsx";
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
    <div className="App">
      <Headers />
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route path="/" element={<Home movies={movies}/>} />
          </Route>
        </Routes>
    </div>
    
  );
};

export default App;
