import React from 'react'

interface Categories {
  id: number;
  title: string;
  body: string;
}
const Page = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const categories = await res.json();
  return (
    <>
    <h1>Category</h1>
    <ul>
      {categories.map((categories) => <li key={category.id}>{category.title}</li>)}
    </ul>
    </>
  )
}

export default Page