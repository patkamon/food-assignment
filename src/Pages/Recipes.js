import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Recipes = () => {


async function getDataFromID(id) {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  return res.data
}

    const { recipeID } = useParams()


    async function searchAPI(menu) {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`)
      return res.data
    }  



function onSearch(e) {
  e.preventDefault()
  console.log(e.target[0].value)
  searchAPI(e.target[0].value).then((data) => {
    console.log(data.meals[0].idMeal)
    window.location = `http://localhost:3001/recipes/${data.meals[0].idMeal}`
  })

}

function searchByID(id) {
  getDataFromID(id).then((data) => {
    console.log(data)
  })
}




  return (
    <div>Recipes

    
    {  recipeID  || <form onSubmit={onSearch}>
      <input placeholder='Search for meal'></input>
      <button type='submit'>submit</button>
    </form> }


    {  recipeID  && <Link to='/Recipes'>back</Link>}

    { recipeID && searchByID(recipeID) }






    </div>
  )
}

export default Recipes