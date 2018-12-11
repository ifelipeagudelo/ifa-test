import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon, Badge } from 'react-bootstrap';

class NavbarPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSelectTrigger = this.onSelectTrigger.bind(this);
        this.state = { active: false };
    }
    
    onSelectTrigger() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#">Network</NavItem>
                        <NavItem href="#">Network</NavItem>
                        <NavItem href="#">Network</NavItem>
                        <NavItem href="#">Network</NavItem>
                        <NavItem href="#">Network</NavItem>
                        <NavItem href="#" className={this.state.active ? 'nav-item-blue': null} >Billing</NavItem>
                        <NavItem href="#">Network</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="#">
                            <Glyphicon glyph="search" />
                        </NavItem>
                        <NavItem href="#">
                            <Glyphicon glyph="question-sign" />
                        </NavItem>
                        <NavItem href="#">
                            <Glyphicon glyph="bell" />
                            <Badge>3</Badge>
                        </NavItem>
                        <NavDropdown title="JS" id="basic-nav-dropdown">
                            <MenuItem eventKey={1} onSelect={this.onSelectTrigger}>Change Color</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;