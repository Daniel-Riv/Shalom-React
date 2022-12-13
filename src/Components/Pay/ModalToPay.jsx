import React, { useContext } from 'react'
import { useRef } from 'react';
import {BsFillCartXFill} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { ItemToPay } from './ItemToPay';
import './toPay.css';
import { setFormatPrice } from '../../hepers/setFormatPrice';


export const ModalToPay = ({ open, handleClose,setOpen }) => {

    const { state, dispatch } = useContext(CartContext);

    const ref = useRef();
    useOnClickOutside(ref,()=>setOpen(false))

    const handleClear = () =>{
        dispatch({ type: 'CLEAR_CART' });
    }

    const total = state.cart.reduce((acc, item) => acc + item.price, 0);
    const formatTotal = setFormatPrice(total);

    const handleAddSend = () =>{
        const msg = `Hola, estoy interesado en comprar los siguientes productos: ${state.cart.map(item => `*${item.name}*, El costo de este producto es: *${item.price}*`).join(', ')}`;
        let url = `https://api.whatsapp.com/send?phone=573135891087&text=${encodeURI(msg)}&app_absent=0`;
        window.open(url, '_blank');
    }

    return (
        <>
        <div className='cart'  ref={ref}>
			<div className='cart__heading'>
				<h4 className='title-carToPay fs-400 fw-700 clr-neutral-700'>Cart</h4>
                    <BsFillCartXFill className='icon-right' onClick={handleClear}/>
                    <AiOutlineClose className='icon-left' onClick={handleClose}/>
		</div>
			<div className='cart__items grid scroll'>
				{state.cart.length === 0 ? (
					<p className='fs-400 fw-700 clr-neutral-700 m-auto'>Your cart is empty</p>
				) : (
                    <>
                    {
                        state.cart.map((item) => (
                            console.log(item),
                            <ItemToPay key={item.id} {...item}  />
                        ))
                    }
                        <span className='item__total fw-400 fs-400  clr-neutral-700'>Total a pagar: {formatTotal}</span>
                    <button className='btn3 flex fw-700 fs-400' onClick={handleAddSend}>Comprar</button>
                    </>
                    
				)} 
			</div>
        </div>
        </>
    )
}
