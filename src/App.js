import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <a href="#">Ecommerce</a>
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;



  