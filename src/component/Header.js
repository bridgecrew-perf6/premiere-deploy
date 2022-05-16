import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaFortAwesomeAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

const Header = ({modifyParentStateValue}) =>{

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="/">Application tournoi</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => modifyParentStateValue('dash')} href="#dashboard"><FaFortAwesomeAlt size='1.7em' /></Nav.Link>
                        <Nav.Link onClick={() => modifyParentStateValue('addJoueur')} href="#addjoueur"><FaUserPlus size='1.7em' /></Nav.Link>
                    </Nav>
                    <Nav className="me">

                        <Nav.Link><button className="btn btn-primary" >LogOut</button></Nav.Link>
                        <Nav.Link><button className="btn  btn-primary" >LogIn</button></Nav.Link>

                    </Nav>
                    <Nav className="me">
                    <Nav.Link href="/dashboard"><FaSignOutAlt size='1em' /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}
export default Header;