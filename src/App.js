import {useEffect, useState} from 'react';
import Recipe from './Recipe.js';
import './App.css';

const App = () => {

  const APP_ID = '08a5246e';
  const APP_KEY = '99bdc6c241ffda1d24b46ff96d6a89e1';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit = {getSearch}>
        <input className="search-bar" type="text" value = {search} onChange = {updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key = {recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients}/>
      )) }
      </div>
    </div>
    );
}

export default App;
