import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
function NavScrollExample() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand><Link to='/'>TAKOMA</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='navLinks'>Home</Link>
                        <NavLink to="/collection" className='navLinks'>Collection</NavLink>
                    </Nav>
                    <NavLink to='/cart'>
                        <BsFillCartPlusFill />
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

