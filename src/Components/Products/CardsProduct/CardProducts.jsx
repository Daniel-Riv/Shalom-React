import { Card } from 'react-bootstrap';
import { RiArrowRightSLine } from 'react-icons/ri';
import "../styles/cardP.css"
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

export const CardProducts = ({ products }) => {
  const { url, nameProduct, price, desc } = products;

  const navigate = useNavigate();


  return (
    <Card className="cardProduct">
      <Card.Img src={url} alt={nameProduct} bsPrefix="card-img-buttom" />
      <Card.Body>
        <Card.Title className="card-title">{nameProduct}</Card.Title>
{/*         <Card.Text className="card-desc">{price}</Card.Text>
        <Card.Text className="card-desc">{desc}</Card.Text> */}
      </Card.Body>
      <Card.Footer bsPrefix="footer">
        <LinkContainer to={`/category/${nameProduct}`}>
          <NavLink className="read-more">
            Ver Más &nbsp;<RiArrowRightSLine className="row-Rigth" />
          </NavLink> 
        </LinkContainer>
      </Card.Footer>
    </Card>
  )
}
