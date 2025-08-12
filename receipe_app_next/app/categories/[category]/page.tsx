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
    <div className='bg-[#ffa60027] grid gap-4 border rouded w-full top-4 left-4 m'>
        <h1 className='text-center gap-3 text-2xl mt-4'>Category Details</h1>
        {/* <p>{category.description}</p> */}
        <div className=''>
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
      </div>
  )
}

export default CategoryDetails