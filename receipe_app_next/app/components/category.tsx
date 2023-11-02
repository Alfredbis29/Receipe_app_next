import React from 'react'
interface category {
image: string;
name: string;
description: string;
key: string;
}
const Category = (
    {image, name, description, key}: category) => {
  return (
    <div key={key}>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt={name} />

    </div>
  )
}

export default Category