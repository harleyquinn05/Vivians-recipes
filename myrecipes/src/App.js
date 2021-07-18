import React, {useEffect, useState} from "react";
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = "558b4e78";
  const APP_KEY = "2d356e8433f34f694737c9ae7300d68f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
  getRecipes();
},[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className = "App">
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type = "text" value={search} onChange={updateSearch} />
          <button className="search-button" type = "submit"> Search</button>
      
      </form>
      <div className= "recipe">
      {recipes.map(recipe =>(
        <Recipe title = {recipe.recipe.label} 
        calories ={recipe.recipe.calories}
        cuisine ={recipe.recipe.cuisineType}  
        image ={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}/> 
      ))}
      </div>

    </div>
  )
}

export default App;
