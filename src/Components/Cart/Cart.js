import React from 'react';
// import axios from 'axios';
import CartItem from '../CartItem/CartItem'; 
import './Cart.css';

const Cart = () => {

    return (
        <div className='Cart'>
            <div className='Cart-container'></div>
            <div className='cart-tours-render'>
                <header className='cart-tours-header'>Your Cart</header>
                <CartItem />
            </div>
        </div>
    );
}

export default Cart;