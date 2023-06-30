import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <Navbar bg="light"expand="lg">
            <Container>
                <Navbar.Brand href="">News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Link to='/' className='btn btn-link'>Home</Link>
                    <Link to='/NewsListPage' className='btn btn-link'>News</Link>
                    <Link to='/SaveForLater' className='btn btn-link'>View Saved News</Link>
                    <Link to='/About' className='btn btn-link'>About</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}