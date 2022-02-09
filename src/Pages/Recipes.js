import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Recipes.css';


const Recipes = () => {


  const [img1, setImg1] = useState()


  useEffect(() => {
    getImg('sandwich')
    


  }, [])



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


function getImg(name){
  searchAPI(name).then((data) => {
    console.log(data)
    setImg1(data.meals[0].strMealThumb)

  })

}



  return (
    <div>Recipes

    
    {  recipeID  || <form onSubmit={onSearch}>
      <input className='search-bar'  placeholder='Search for meal'></input>
      <button type='submit'>submit</button>
    </form> }

    
    


    {  recipeID  && <Link to='/Recipes'>back</Link>}



    <div className='container'>
    { recipeID ||  <div className='menu1'> 
            <img className='img1' src={img1} ></img>
            <p>Sandwich</p>
                  </div> }
    { recipeID ||  <div className='menu2'> 
            <img className='img1' src={img1} ></img>
            <p>Sandwich</p>
                  </div> }
    </div>





    </div>
  )
}

export default Recipes