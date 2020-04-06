import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: ""
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  productInfo = { title: "Product List" };
  categoryInfo = { title: "Category List", 
  changeCategory:this.changeCategory, 
  currentCategory:this.state.currentCategory 
};

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={this.categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={this.productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
