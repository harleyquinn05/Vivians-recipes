import React  from "react";
import style from './recipe.module.css'

const Recipe = ({title, image, calories, cuisine, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className="type">{cuisine}</p>
            <img src={image} alt=""/>
            <p className="count">{calories}</p>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
        
    );
}
export default Recipe;