import { useContext } from 'react';
import {MdDelete} from 'react-icons/md'
import { CartContext } from '../../context/CartContext';
import { setFormatPrice } from '../../hepers/setFormatPrice';

export const ItemToPay = ({ id,name,price,quantity,url }) => {

    const {dispatch} = useContext(CartContext);

    const handleDelete =(id)=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:id
        })
    }

    const formatPrice = setFormatPrice(price);
    const formatTotal = setFormatPrice(price * quantity);


    return (
        <>
            <div className='cart__item flex' key={id}>
                <div className='item flex'>
                    <img src={url} alt='' />
                    <div className='item__info'>
                        <p className='item__name fw-400 fs-400  '>
                            {name}
                        </p>
                        <span className='item__price fw-400 fs-400  clr-neutral-700'>
                            {formatPrice} <b>x</b> {quantity}
                        </span>{' '}
                        <span className='fw-700 fs-400  clr-neutral-900'>
                            {formatTotal}
                        </span>
                    </div>
                    <MdDelete  className='icon-delete' onClick={()=>handleDelete(id)}/>
                </div>
            </div>
        </>

    )
}
