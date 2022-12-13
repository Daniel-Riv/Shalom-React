import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./read-more.css"

export const ButtonHome = ({ children, route }) => {
  const navigate = useNavigate();
  return (
    <LinkContainer to={`/${route}`} >
      <NavLink className="read">
        {children}
      </NavLink>
    </LinkContainer>
  )
}
