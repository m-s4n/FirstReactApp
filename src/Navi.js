import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import SepetSummary from "./SepetSummary";
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
          <NavbarBrand href="/">Seymen App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  GitHub
                </NavLink>
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
