import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import SepetSummary from "./SepetSummary";
import './css/Navi.css';

export default class Navi extends Component {
  state = {
    isOpen: false,
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarText>
            <Link to="/" className="linkToClean">Seymen App</Link>
          </NavbarText>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavbarText> 
                  &nbsp;&nbsp;<Link to="/registry" className="linkToClean">Registry</Link>
                </NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <SepetSummary
                sepet={this.props.sepet}
                decreaseToSepet={this.props.decreaseToSepet}
                deleteToSepet={this.props.deleteToSepet}
              />
            </Nav>
            <NavbarText>Mustafa SEYMEN</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
