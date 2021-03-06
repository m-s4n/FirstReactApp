import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import SepetDetail from "./SepetDetail";
import Registry from "./Registry";

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    sepet: [],
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  productInfo = {
    title: "Product List",
  };
  categoryInfo = {
    title: "Category List",
  };

  // eklenen urun sepette var ise sayısı arttırılır yoksa yeni ürün eklenir.
  addToSepet = (product) => {
    let newSepet = this.state.sepet;
    let sonuc = newSepet.findIndex((item, index) => {
      return item.id === product.id;
    });
    if (sonuc === -1) {
      newSepet.push({
        id: product.id,
        name: product.productName,
        price:product.unitPrice,
        adet: 1,
      });
    } else {
      newSepet[sonuc]["adet"] += 1;
    }
    this.setState({ sepet: newSepet });
    alertify.success('" ' + product.productName + ' " added to sepet !');
  };

  // Sepetteki ürünlerin adetini azaltır bir adet var ise siler.
  decreaseToSepet = (product) => {
    let newSepet = this.state.sepet;
    newSepet.forEach((item, index) => {
      if (item.id === product.id) {
        if (item.adet > 1) {
          newSepet[index]["adet"] -= 1;
        } else {
          newSepet.splice(index, 1);
        }
      }
    });
    this.setState({ sepet: newSepet });
    alertify.warning('" ' + product.name + ' " reduced from sepet !');
  };
  // Sepetteki ürünün adetine bakılmaksızın siler.
  deleteToSepet = (product) => {
    let newSepet = this.state.sepet;
    newSepet = newSepet.filter((item) => {
      return item.id !== product.id;
    });
    this.setState({ sepet: newSepet });
    alertify.error('" ' + product.name + ' " deleted from sepet !');
  };

  // apiden ürünler verisini çeker.
  getProducts = (categoryId) => {
    let url = "http://localhost:4000/products";
    if (categoryId) {
      url += "/?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Container>
          <Navi
            sepet={this.state.sepet}
            decreaseToSepet={this.decreaseToSepet}
            deleteToSepet={this.deleteToSepet}
          />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              {/* Burada routing işlemi yapılıyor*/}
              <Switch>
              {/* path = / */}
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      addToSepet={this.addToSepet}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={this.productInfo}
                    />
                  )}
                ></Route>
                {/* path = /sepet */}
                <Route exact 
                path="/sepet" 
                render={props =>(
                  <SepetDetail
                    {...props}
                    deleteToSepet={this.deleteToSepet}
                    decreaseToSepet={this.decreaseToSepet}
                    sepet={this.state.sepet}
                  />
                )}
                ></Route>
                {/* olmayan path istenirse */}

                {/* Registry sayfası  path = /registry */}
                <Route exact path='/registry' component={Registry}>
                
                </Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
