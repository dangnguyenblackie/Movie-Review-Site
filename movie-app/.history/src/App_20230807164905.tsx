import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { useState } from "react";
import axios from "axios";

const [movies, setMovies] = useState();
const getMovies = () => {
  try{
    const response = await axios.get("/api/v1/movies");
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
