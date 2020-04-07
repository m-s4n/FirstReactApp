import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: "",
    products:[]
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  productInfo = { title: "Product List" };
  categoryInfo = {
    title: "Category List",
  };

  // apiden veri çekme
  getProducts = (categoryId) => {
    let url = 'http://localhost:4000/products';
    if(categoryId){
      url += '/?categoryId=' + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  componentDidMount(){
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={this.productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
