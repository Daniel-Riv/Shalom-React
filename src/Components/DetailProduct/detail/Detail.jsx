import React, { useContext } from 'react'
import {BsCartPlusFill} from 'react-icons/bs';
import { DetailProdut } from '../data/DetailProdut';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiSubtractFill} from 'react-icons/ri';
import { useCounter } from '../../../hooks/useCounter';
import { CartContext } from '../../../context/CartContext';
import "./index.css";

export const Detail = (detailProduct) => {
  const { data } = DetailProdut(detailProduct);
  console.log(data)
  const {dispatch} = useContext(CartContext);
  const {counter,increment,decrement} = useCounter(0);

  const handleIncrement =()=>{
    if (counter < data[0]?.stock) {
      increment();
    }
  }

  const productCart = {
    id: data[0]?.id,
    url: data[0]?.url,
    name: data[0]?.nameProduct,
    price: data[0]?.price,
    quantity: counter,
  };


  const handleAddCart =()=>{
    dispatch({
      type: "ADD_TO_CART",
      payload: productCart
    });
  }



  return (
    <>
      {
        data.map((item) => (

          <div className='product-description flow' key={item.id}>
            <p className='text-uppercase clr-primary-400'>
              Shalom muebles y decoración
            </p>
            <h1 className='fw-700 line-height-300 fs-800 clr-neutral-900'>
              {item.nameProduct}
            </h1>
            <p className='fw-400 line-height-500 fs-400 clr-neutral-700' style={{ textAlign: 'justify' }}>
              {item.value}
            </p>
            <div className='product-price'>
              <div className='discounted-price flex'>
                <span className='fw-700 clr-neutral-900 fs-700' > ${item.price}</span>
              </div>
            </div>

            <div className='action-wrapper flex'>
              <div className='product-quantity flex '>
                <RiSubtractFill onClick={()=> decrement()} />
                <span className='fw-700 fs-400 clr-neutral-900'>{counter}</span>
                <AiOutlinePlus onClick={handleIncrement} />
              </div>
              <button onClick={handleAddCart} className='btn2 flex fw-700 fs-400'>
                <BsCartPlusFill className='fs-500' />
                Agregar al Carrito
              </button>
            </div>
          </div>
        )

        )}

    </>
  )
}
