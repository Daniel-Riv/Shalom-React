import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {CgShoppingCart} from 'react-icons/cg'
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { ModalToPay } from '../Pay/ModalToPay';

export const Cart = () => {

    const {state} = useContext(CartContext);

    console.log(state);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <Link  style={{textDecoration:"none"}} onClick={handleOpen}>
        <div className='cart-widget'>
            <CgShoppingCart className="cart-icon" />
            {
                state.cart.length <= 0 ? <span></span> 
                : <span className='cart-span'>{state.cart.length}</span>
            }
        </div>
    </Link>
    {open && (<ModalToPay open={open} handleClose={handleClose} setOpen={setOpen}/>)}
    </>
    
  )
}
