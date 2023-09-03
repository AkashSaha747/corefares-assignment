import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import corefare from '../assets/corefares.jpg'
import './Navbar.css';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect className='navbar'  >
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div>
                        <img src={corefare} width={'90px'} height={'70px'} style={{ padding: '0 9px' }} className='image' />
                    </div>
                </Container>


            </Navbar>

        </>
    );
}

export default ColorSchemesExample;