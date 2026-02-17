import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useScrollTo } from '../hooks/useScrollTo';
import './Layout.css';

function Header() {
  const scrollTo = useScrollTo(80); // 80px es un buen margen para headers estándar
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt="Logo"
            src="https://placehold.co/30x30"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <div className="header-title">
            Consultora de Seguridad Ortiz
          </div>
        </Navbar.Brand>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* MENÚ COLAPSABLE */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link onClick={() => scrollTo('inicio')}>Inicio</Nav.Link>
            <Nav.Link href="#diferencial">Diferencial</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;