import React from 'react';
import { Card } from 'react-bootstrap';
import { ButtonHome } from '../../Utils/Buttons/ButtonHome/ButtonHome';
import './card.css';

export const ItemCard = ({products}) => {
    const {categoria,descripcion,url} = products;

    return (
        <>
            <Card className="cardHome">
                <Card.Img src={url} alt={categoria} bsPrefix="card-img-buttom" />
                <Card.Body>
                    <Card.Title className="card-title">{categoria}</Card.Title>
                    <Card.Text className="card-desc">{descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer bsPrefix="footer">
                <ButtonHome route={categoria}>Ver Productos</ButtonHome>
                </Card.Footer>
            </Card>
        </>
    )
}
