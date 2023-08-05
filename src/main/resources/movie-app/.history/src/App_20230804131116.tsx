import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=""/>
      </Route>
    </Routes>
  )
}

export default App