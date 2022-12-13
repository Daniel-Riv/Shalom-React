import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../Components/DetailProduct/detail/Detail'
import { ImagenBox } from '../Components/DetailProduct/detail/ImagenBox';

export const DetailPages = () => {
    const {detailProduct} = useParams();
  return (
    <>
    <main className='product'>
			<div className='container-md grid product-container'>
        <Detail detailProduct ={detailProduct}
        />
        <ImagenBox detailProduct={detailProduct} />
        </div>
    </main>
    </>
  )
}
