import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import './whatsapp.css'

export const Whatsap = () => {
    const handleClick = () => {
        const msg = 'Hola, estoy interesado en tus productos';
        let url = `https://api.whatsapp.com/send?phone=573135891087&text=${encodeURI(msg)}&app_absent=0`;
        window.open(url, '_blank');

    }
    return (
        <>
            <a className='wt'>
                <ImWhatsapp className="whatsapp-icon" onClick={handleClick}/>
            </a>

        </>
    )
}
