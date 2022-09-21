import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Headers = (props) => {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">fitfood</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.instagram.com/gildolanchespe/" target="_blank">O melhor de Recife</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
}


export default Headers;