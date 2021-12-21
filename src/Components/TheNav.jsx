import { Container, Nav, Navbar } from 'react-bootstrap'

export const TheNav = () => {
    return (
        <div>
            <Navbar className="text-withe bg-white" bg="withe" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-50" src="https://icon-library.com/images/rick-and-morty-icon/rick-and-morty-icon-4.jpg" alt="" /></Navbar.Brand>
                    <div>
                    <Nav className="me-auto nav-options">
                        <Nav.Link href="#home">Doc</Nav.Link>
                        <Nav.Link className="mx-4" href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">HELP US</Nav.Link>
                    </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
