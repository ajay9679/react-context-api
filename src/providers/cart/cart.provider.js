import React from 'react';
import {addItemToCart, removeItemFromCart, filterItemsFromCart, getCartItemsCount, getCartTotal} from './cart.utils.js';

export const CartContext = React.createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartItemsCount: 0,
	cartTotal: 0,
});

const CartProvider = ({children}) => {
	const [hidden, setHidden] = React.useState(true);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartItemsCount, setCartItemsCount] = React.useState(0);
	const [cartTotal, setCartTotal] = React.useState(0);

	const toggleHidden = () => setHidden(!hidden);
	const addItem = item => setCartItems(addItemToCart(cartItems, item));
	const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
	const clearItemFromCart = item => setCartItems(filterItemsFromCart(cartItems, item));
	React.useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
		setCartTotal(getCartTotal(cartItems));
	}, [cartItems]);

	return <CartContext.Provider value={{hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, clearItemFromCart, cartTotal}} >{children}</CartContext.Provider>
};

export default CartProvider;
