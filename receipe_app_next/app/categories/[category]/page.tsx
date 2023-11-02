import Recipe from '@/app/components/recipe'
import recipe from '@/app/components/recipe'
import React from 'react'


const CategoryDetails = async (props: {params: {category: string}}) => {
    const {params} = props
    const { category } = params
    const res = await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const data = await res.json();
    console.log(data)
  return (
    <div>
        <h1>Category Details</h1>
        {data?.meals?.map(
            (recipe : any) => < Recipe
            key={recipe.idMeal}
            recipe={{
                name: recipe.strMeal,
                image: recipe.strMealThumb,
                id: recipe.idMeal
            }}
            />
        )}
      </div>
  )
}

export default CategoryDetails