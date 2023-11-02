import React from 'react'

interface Recipe {
    name: string;
    image: string;
    id: string;
}

interface Props{
    recipe : Recipe
}
const Recipe = (
    props : Props
) => {
    const {recipe} = props
  return (
    <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
    </div>
  )
}

export default Recipe