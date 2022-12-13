import { Dataproducts } from '../data/Dataproducts';
import { CardProducts } from './CardProducts';
import "../styles/cardP.css";
import { Menu } from '../Slider/Menu';
import {  useState } from 'react';

const initialState = {
    nameProduct: '',
    url: '',
}

export const ListCardProduct = ({ product }) => {
    const { img } = Dataproducts(product);
    const [information, setInformation] = useState(initialState);
    

    if (Object.keys(img).length === 0) {
        return <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="alert alert-danger text-center" role="alert">
                        No hay productos
                    </div>
                </div>
            </div>
        </div>

    }

    return (
    <>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="content">
                <div className="row">
                    <Menu  setInformation={setInformation} 
                    information={information} />
                    <div className="col-sm-12 col-md-6 ">
                    <div className='cards'>
                    {
                        img?.map((img) => (
                            <CardProducts key={img.id} products={img} />
                        ))
                    }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>

            )
}
