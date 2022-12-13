import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useData } from '../../Home/Cards/data/useData';
import './menu.css';

export const Menu = ({ information, setInformation}) => {
    const { categories } = useData();

    useEffect(() => {
        if (categories.length > 0) {
            setInformation({
                nameProduct: categories[0].categoria,
                url: categories[0].url
            })
        }
    }, [categories]);

    const navigate = useNavigate();
    return (
        <div className="col-lg-4 col-md-6 col-sm-7 col-xs-12">
            <div className="sidebar-wrapper">
                <div className="single-sidebar">
                    <div className="sec-title">
                        <h3>{information.nameProduct}</h3>
                    </div>
                    <ul className="categories clearfix">
                        {
                            categories.map((product) => (
                                <li key={product.id}>
                                    <button onClick={() => {
                                        navigate(`/${product.categoria}`) 
                                        setInformation({
                                            nameProduct: product.categoria,
                                        })
                                    }}>
                                        {product.categoria}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
