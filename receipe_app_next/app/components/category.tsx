import Link from 'next/link';
import React from 'react'
interface Category {
image: string;
name: string;
description: string;
id: string;
}
interface Props{
  category : Category
}
const Category = (
    props : Props ) => {
      const {category} = props
  return (
    <div className=''>
    <Link href={`/categories/${category.name}`} id={category.name}>
        <h1 className='text-xl mb-2'>{category.name}</h1>
        <p>{category.description}</p>
        <img src={category.image} alt={category.name} />
    </Link>
    </div>
  )
}

export default Category