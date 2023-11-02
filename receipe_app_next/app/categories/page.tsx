import React from 'react'
import Category from '../components/category'
const New = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  const categories = await res.json();
  console.log(categories)
  return (
  <div>
    <div> Available Categories</div>
    {categories.categories.map(
      category => 
      <Category
        name={category.strCategory}
        description={category.strCategoryDescription}
        image={category.strCategoryThumb}
        key={category.idCategory}
      />
    )}
    <Category image='=750&dpr=1' name='chiken' description='It made with oil and hsjji' key='1'/>
  </div>
  )
}

export default New