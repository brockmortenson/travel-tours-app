import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CartItem.css';

const CartItem = () => {
    const [ cartArr, setCartArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/cart')
            .then(response => {
                setCartArr(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteTour = (tour_id) => {
        axios
            .delete(`/api/cart/${tour_id}`)
            .then(() => {
                alert('Tour has been removed from your cart')
            })
            .catch(err => console.log(err));
    }

    
    const mappedCart = cartArr.map((cartTour) => {
        return (
            <div key={cartTour.tour_id} className='cart-tour-container'>
                <div className='cart-individual-tour'>
                    <div className='cart-tour-title'>{cartTour.title}</div>
                    <div className='cart-tour-price'>${cartTour.price}</div>
                    <div className='cart-tour-summary'>{cartTour.description}</div>
                    <button onClick={() => deleteTour(cartTour.tour_id)}>Delete</button>
                </div>
            </div>
        )
    });

    function handleCheckout() {
        alert('Checkout has not yet been configured')
    }
    
    return (
        <div className='CartItem'>
            <div className='cart-tours-list'>{mappedCart}
                <div className='checkout-container'>
                    <h3>Checkout button will soon be integrated with Stripe...</h3>
                    <button type="button" id="checkout-button" style={{ textDecoration: 'none'}} onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
            
            {/* <div className='checkout-container'></div> */}
            {/* <div className='stripe'>
            <a href='https://js.stripe.com/v3/'></a>
            </div> */}
            {/* <button type="button" id="checkout-button">Checkout</button> */}

        </div>
    );
}

export default CartItem;