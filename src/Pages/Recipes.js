import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Recipes = () => {

  const [detail, setDetail] = useState()
  const { recipeID } = useParams()

  const [name, setName] = useState()
  useEffect(() => {
    
    getDataFromID(recipeID).then((data) => {
      setDetail(Object.entries(data.meals[0]))
      console.log(data.meals[0])
    
    })

   


  }, [])

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
      window.location = `http://localhost:3001/recipes/${data.meals[0].idMeal}`
    })
  }

  function searchByID(id) {
    getDataFromID(id).then((data) => {
      console.log(data.meals[0])
      // setName(data.meals[0].strMeal)

      // let arr = []
      // for (const obj in data.meals[0]) {
      //   if (obj.startsWith('strIngredient') && data.meals[0].obj !== '') {
      //     arr.push(data.meals[0][obj])
      //     // console.log(obj)
      //   }
      // }
      // return arr
    })
  }

  // let arr = []
  // for (const obj in data.meals[0]) {
  //   if (obj.startsWith('strIngredient') && obj.value !== null) {
  //     arr.push(<p>{data.meals[0][obj]}</p>)
  //     console.log(data.meals[0][obj])
  //   }
  // }

  return (
    <div>
      Recipes
      {recipeID || (
        <form onSubmit={onSearch}>
          <input placeholder="Search for meal"></input>
          <button type="submit">submit</button>
        </form>
      )}


      {detail && (detail.filter(([k,v]) => k.startsWith('strIngredient') && v!== "" )).map((r) => (<div>{r[1]}</div>))
      
      
      }



      {recipeID && <Link to="/Recipes">back</Link>}
      {/* {recipeID && searchByID(recipeID)} */}
      {/* <img src={searchAPI(menu)}></img> */}
      {/* {name} */}
      {/* {searchByID(recipeID)} */}
      {/* {detail} */}
    </div>
  )
}

export default Recipes
