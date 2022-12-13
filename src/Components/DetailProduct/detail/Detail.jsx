import React, { useContext } from 'react'
import {BsCartPlusFill} from 'react-icons/bs';
import { DetailProdut } from '../data/DetailProdut';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiSubtractFill} from 'react-icons/ri';
import { useCounter } from '../../../hooks/useCounter';
import { CartContext } from '../../../context/CartContext';
import "./index.css";
import { setFormatPrice } from '../../../hepers/setFormatPrice';

export const Detail = (detailProduct) => {
  const { data } = DetailProdut(detailProduct);
  console.log(data)
  const {state,dispatch} = useContext(CartContext);
  const {counter,increment,decrement} = useCounter(0);

  console.log("state",state);

  const handleIncrement =()=>{
    if (counter < data[0]?.stock) {
      increment();
    }
  }

  const formatPrice = setFormatPrice(data[0]?.price);

  const toatal = data[0]?.price * counter;

  


  const productCart = {
    id: data[0]?.id,
    url: data[0]?.url,
    name: data[0]?.nameProduct,
    price: toatal,
    quantity: counter,
  };



  const handleAddCart =()=>{
    const exist = state.cart.some((item) => item.id === productCart.id);
    if (exist) {
      state.cart.forEach(element => {
        if (element.id === productCart.id) {
          element.quantity += productCart.quantity;
          element.price += productCart.price;
        }
      });
    }else{
      dispatch({
        type: "ADD_TO_CART",
        payload: productCart
      })
    }

     ;
  }



  return (
    <>

          <div className='product-description flow' /* key={item.id} */>
            <p className='text-uppercase clr-primary-400'>
              Shalom muebles y decoración
            </p>
            <h1 className='fw-700 line-height-300 fs-800 clr-neutral-900'>
              {data[0]?.nameProduct}
            </h1>
            <p className='fw-400 line-height-500 fs-400 clr-neutral-700' style={{ textAlign: 'justify' }}>
              {data[0]?.value}
            </p>
            <div className='product-price'>
              <div className='discounted-price flex'>
                <span className='fw-700 clr-neutral-900 fs-700' > {formatPrice}</span>
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
    </>
  )
}
