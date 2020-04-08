import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class SepetSummary extends Component {
  renderSepetSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetim - {this.props.sepet.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.sepet.map((item) => (
            <DropdownItem key={item.id}>
              <Badge
                color="danger"
                onClick={() => this.props.decreaseToSepet(item)}
              >
                -
              </Badge>
              {item.name}
              <Badge color="success">{item.adet}</Badge>
              <Badge
                color="danger"
                onClick={() => this.props.deleteToSepet(item)}
              >
                x
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptySepet() {
    return (
      <NavItem>
        <NavLink> Empty Sepet</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.sepet.length > 0
          ? this.renderSepetSummary()
          : this.renderEmptySepet()}
      </div>
    );
  }
}
