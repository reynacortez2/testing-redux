import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';
import '../index.css';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <Table responsive="sm">
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right">
                <Button 
                  size="sm" 
                  variant="danger"
                  onClick={() => removeFromCart(product)}>
                  Delete
                </Button>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return{
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)

