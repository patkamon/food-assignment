import axios from 'axios'
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Link, useParams } from 'react-router-dom'
import './RecipesID.css';

=======
import { useParams } from 'react-router-dom'
>>>>>>> origin/jib

const Recipes = () => {
  const [detail, setDetail] = useState()
  const { recipeID } = useParams()

  useEffect(() => {
    getDataFromID(recipeID).then((data) => {
      setDetail(Object.entries(data.meals[0]))
      console.log(data.meals[0])
    })
  }, [recipeID])

  async function getDataFromID(id) {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    return res.data
  }

  async function searchAPI(menu) {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`
    )
    return res.data
  }
  function onSearch(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    searchAPI(e.target[0].value).then((data) => {
      console.log(data.meals[0])
      window.location = `http://localhost:3000/recipes/${data.meals[0].idMeal}`
    })
  }

  function clearPage(e) {
    e.preventDefault()
    setDetail()
    window.location = `http://localhost:3000/Recipes`
  }

  return (
    <div>
      {/* Recipes */}
      {!recipeID && (
        <form onSubmit={onSearch}>
          <input placeholder="Search for meal"></input>
          <button type="submit">submit</button>
        </form>
      )}
      {detail &&
        detail
          .filter(([k, v]) => k.startsWith('strMealThumb'))
          .map((thumb) => (
            <img key={thumb} src={thumb[1]} alt="thumbnail"></img>
          ))}
      {detail &&
        detail
          .filter(([k, v]) => k.startsWith('strIngredient') && v !== '')
          .map((r) => <div key={r}>{r[1]}</div>)}
      {recipeID && (
        <form onSubmit={clearPage}>
          <button type="submit">back</button>
        </form>
      )}
    </div>
  )
}

export default Recipes
