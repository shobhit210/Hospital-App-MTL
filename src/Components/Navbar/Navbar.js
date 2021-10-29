import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Topbar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Hospital App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to={`/dashboard`}>
                                <Nav.Link href="#home">Employees Info</Nav.Link>
                            </Link>
                            <Link to={`/userdetails`}>
                                <Nav.Link href="#features">Visitor Details</Nav.Link>
                            </Link>
                            <Nav.Link href="#pricing">Departments</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Topbar
