import React from 'react'
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function ControlPanel(props) {
    const history = useHistory();
    return (
        <>
            <h1>ControlPanel</h1>

            <Nav.Link as={Link} to="/users" >Users</Nav.Link>
            <Nav.Link as={Link} to="/events" >Events</Nav.Link>
        </>
    )
}
