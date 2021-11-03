import React from 'react';
import { withRouter } from 'react-router-dom';
import {CartContext} from '../../providers/cart/cart.provider.js';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history, dispatch }) => {
  const {cartItems, toggleHidden} = React.useContext(CartContext);
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
}

export default withRouter(CartDropdown);