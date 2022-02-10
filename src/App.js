// import logo from './logo.svg';
import './App.css'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Recipes from './Pages/Recipes'

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeID" element={<Recipes />} />
        <Route path="*" element={<Navigate to="recipes" />} />
      </Routes>
    </div>
  )
}

export default App
