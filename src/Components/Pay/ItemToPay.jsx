import { useContext } from 'react';
import {MdDelete} from 'react-icons/md'
import { CartContext } from '../../context/CartContext';

export const ItemToPay = ({ id,name,price,quantity,url }) => {

    const {dispatch} = useContext(CartContext);

    const handleDelete =(id)=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:id
        })
    }


    return (
        <>
            <div className='cart__item flex' key={id}>
                <div className='item flex'>
                    <img src={url} alt='' />
                    <div className='item__info'>
                        <p className='item__name fw-400 fs-400  clr-neutral-700'>
                            {name}
                        </p>
                        <span className='item__price fw-400 fs-400  clr-neutral-700'>
                            ${price} * {quantity}
                        </span>{' '}
                        <span className='fw-700 fs-400  clr-neutral-900'>
                            ${price * quantity}
                        </span>
                    </div>
                    <MdDelete  className='icon-delete' onClick={()=>handleDelete(id)}/>
                </div>
            </div>
        </>

    )
}
