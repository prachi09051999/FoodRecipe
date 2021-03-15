import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image, ingredients }) => {
	return (
		<div className = {style.recipe}>
		  <img className = {style.image} src={image} alt="img"/>
		  <h1 className = "title">{title}</h1>
		  <ol>{ingredients.map(ingredient => (
		  	<li>{ingredient.text}</li>
		  	))}</ol>
		  <p>{calories}</p>
		</div>
		);
}

export default Recipe;