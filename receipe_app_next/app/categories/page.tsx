import React from 'react'
import Category from '../components/category'
const New = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  const categories = await res.json();

  return (
  <div className='p-4'>
    <div className='text-4xl text-center text-orange-300 m-4'> Available Categories</div>
    <div className="grid grid-cols-3 gap-7">
    {categories.categories.map(
      category =>
      <Category
          key={category.idCategory}
          category= {{
          name: category.strCategory,
          description: category.strCategoryDescription,
          image: category.strCategoryThumb,
          id: category.idCategory
        }}
      />
    )}
    </div>
  </div>
  )
}

export default New