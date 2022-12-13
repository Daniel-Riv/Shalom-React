import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import { services } from './service';
import { Cart } from '../../Cart/Cart';
import { ModalToPay } from '../../Pay/ModalToPay';
import { useState } from 'react';
import './Nav.css';


export const ComNavabr = () => {

    
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image src="/Logo/logo2.png" style={{ display: 'flex', width: 130 }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer to="/"><Nav.Link>Inicio</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>Nuestra Empresa</Nav.Link></LinkContainer>
                        <NavDropdown title="Categorias" >
                            {
                                services.map((service) => (
                                    <LinkContainer key={service.id} to={`/${service.service}`}>
                                        <NavDropdown.Item>
                                            {service.service}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                ))
                            }
                        </NavDropdown>
                        <LinkContainer to="/contact"><Nav.Link>Contactanos</Nav.Link></LinkContainer>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                    <Cart />
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
        </>
    );
};
