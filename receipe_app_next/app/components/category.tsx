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
    <div className='border rounded shadow-[4px_8px_8px_rgba(0,0,0,0.38)] relative hover:scale-[1.0199]'>
      <Link href={`/categories/${category.name}`} id={category.name}>
          <h1 className='text-4xl mb-2 absolute bottom-2 left-0 z-10 bg-[rgba(0,0,0,0.6)] p-1 text-white w-full text-center'>{category.name}</h1>
          <img className='w-full' src={category.image} alt={category.name} />
      </Link>
    </div>
  )
}

export default Category