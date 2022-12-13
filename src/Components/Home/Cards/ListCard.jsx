import React from 'react'
import { useData } from './data/useData';
import './card.css';
import { ItemCard } from './ItemCard';

export const ListCard = () => {
    const { categories } = useData();

    if(Object.keys(categories).length === 0){
        return(
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
return (
    <div className='cards'>
        {
            categories?.map((category)=> <ItemCard key={category.id} products={category} />)
        }

    </div>
  )
}
