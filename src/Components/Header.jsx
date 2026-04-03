import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import '../assets/style/header.css';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark text-white justify-content-between">
                <Container>
                        <Navbar.Brand href="#home" className='text-white'>Portfolio</Navbar.Brand>
                        <Stack direction="horizontal" gap={3}>
                            <Nav.Link className="p-2 home" href='/home'>Home</Nav.Link>
                            <Nav.Link className="p-2" href='/about'>About</Nav.Link>
                            <Nav.Link className="p-2" href='/skills'>skills</Nav.Link>
                            <Nav.Link className="p-2" href='/projects'>Projects</Nav.Link>
                            <Nav.Link className="p-2" href='/resume'>Resume</Nav.Link>
                        </Stack>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;