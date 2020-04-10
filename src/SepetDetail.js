import React, { Component } from "react";
import { Table, Button, Alert } from "reactstrap";
class SepetDetail extends Component {
  renderSepetDetail() {
    let { deleteToSepet, decreaseToSepet, sepet } = this.props;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Reduce</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sepet.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unitPrice}</td>
              <td>{product.adet}</td>
              <td>
                <Button
                  color="warning"
                  onClick={() => decreaseToSepet(product)}
                >
                  -
                </Button>
              </td>
              <td>
                <Button color="danger" onClick={() => deleteToSepet(product)}>
                  x
                </Button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    );
  }

  renderSepetEmpty() {
    return <Alert color="info">Sepet is Empty</Alert>;
  }

  render() {
    return (
      <div>
        {this.props.sepet.length > 0
          ? this.renderSepetDetail()
          : this.renderSepetEmpty()}
      </div>
    );
  }
}
export default SepetDetail;
