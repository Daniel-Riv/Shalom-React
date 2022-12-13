import React, { useState } from 'react'
import { DetailProdut } from '../data/DetailProdut';
import './imagenBox.css';
import "./index.css";

export const ImagenBox = (detailProduct) => {
    const{data} = DetailProdut(detailProduct);
    const [currentProductImage, setCurrentProductImage] = useState({
		active : 0,
		url: data[0]?.url
	});

	if(data.length === 0){
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
            <div className='flex product-image' >
					<img
						src={currentProductImage?.url || data[0]?.url}
						alt=''
					/>
					<div className='thumbnail-wrapper flex'>
						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage({ active: 0, url: data[0].url })}
								className={currentProductImage.active === 0 ? 'active' : ''}
								src={data[0].url}
								alt=''
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage({ active: 1, url: data[0].url2 })}
								className={currentProductImage.active === 1 ? 'active' : ''}
								src={data[0].url3}
								alt=''
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage({ active: 2, url: data[0].url3 })}
								className={currentProductImage.active === 2 ? 'active' : ''}
								src={data[0].url3}
								alt=''
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage({ active: 3, url: data[0].url4 })}
								className={currentProductImage.active === 3 ? 'active' : ''}
								src={data[0].url4}
								alt=''
							/>
						</div>
					</div>
					
					
				</div>		
    </>
  )
}
