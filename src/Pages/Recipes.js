import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Recipes.css'

import './Recipes.css';


const Recipes = () => {

  const [img1, setImg1] = useState()
  const [name1, setName1] = useState()

  const [img2, setImg2] = useState()
  const [name2, setName2] = useState()

  const [img3, setImg3] = useState()
  const [name3, setName3] = useState()

  const [img4, setImg4] = useState()
  const [name4, setName4] = useState()

  const [img5, setImg5] = useState()
  const [name5, setName5] = useState()

  const [img6, setImg6] = useState()
  const [name6, setName6] = useState()

  const [img7, setImg7] = useState()
  const [name7, setName7] = useState()

  const [img8, setImg8] = useState()
  const [name8, setName8] = useState()


  useEffect(() => {
    getImg('Sandwich')
  
  }, [])




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

function getImg(name, setImg){
  searchAPI(name).then((data) => {
    console.log(data.meals[0].strMealThumb)
    setImg(data.meals[0].strMealThumb)

  })  
}

function getName(name, setName){
  searchAPI(name).then((data) => {
    console.log(data.meals[0].strMeal)
    setName(data.meals[0].strMeal)

  })  
}


  return (
    <div>Recipes

    
    { recipeID  || <form onSubmit={onSearch}>
      <input placeholder='Search for meal'></input>
      <button type='submit'>submit</button>
    </form> }

    { recipeID || getImg('Sandwich', setImg1)}
    { recipeID || getName('Sandwich', setName1)}
    { recipeID  && <Link to='/Recipes'>back</Link>}
    { recipeID && searchByID(recipeID) }
    { recipeID || getImg('Steak', setImg2)}
    { recipeID || getName('Steak', setName2)}
    { recipeID || getImg('Soup', setImg3)}
    { recipeID || getName('Soup', setName3)}
    { recipeID || getImg('Noodle', setImg4)}
    { recipeID || getName('Noodle', setName4)}
    { recipeID || getImg('Salad', setImg5)}
    { recipeID || getName('Salad', setName5)}
    { recipeID || getImg('Burger', setImg6)}
    { recipeID || getName('Burger', setName6)}
    { recipeID || getImg('Pizza', setImg7)}
    { recipeID || getName('Pizza', setName7)}
    { recipeID || getImg('Chicken', setImg8)}
    { recipeID || getName('Chicken', setName8)}
   


    {recipeID || <div className='container'>
      <div className='menu1'>
      <img src={img1}></img>
      <p>{name1}</p>
      </div>

      <div className='menu2'>
      <img src={img2}></img>
      <p>{name2}</p>
      </div>

      <div className='menu3'>
      <img src={img3}></img>
      <p>{name3}</p>
      </div>
      <div className='menu4'>
      <img src={img4}></img>
      <p>{name4}</p>
      </div>

      <div className='menu5'>
      <img src={img5}></img>
      <p>{name5}</p>
      </div>

      <div className='menu6'>
      <img src={img6}></img>
      <p>{name6}</p>
      </div>

      <div className='menu7'>
      <img src={img7}></img>
      <p>{name7}</p>
      </div>

      <div className='menu8'>
      <img src={img8}></img>
      <p>{name8}</p>
      </div>



      </div>}





    </div>
  )
}

export default Recipes