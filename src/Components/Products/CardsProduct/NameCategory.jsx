import React from 'react'
import { FilterCategory } from '../data/FilterCategory';
import "../styles/category.css";


export const NameCategory = (product = '') => {

  const { nameCategory } = FilterCategory(product);
  const { url, category } = nameCategory;
  return (

    <>
      <section className="page-title ">
        <img src={url} alt={url} className="imgCategory" />
      </section>
    </>

  )
}
