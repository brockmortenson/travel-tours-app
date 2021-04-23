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

    const mappedCart = cartArr.map((cartTour) => {
        /* the commented code below is from trying to get the prices to sum */

        // let total = '';
        // for (let i = 0; i < cartArr.length; i++) {
        //     if (cartTour.price) {
        //         total += cartTour.price
        //     }
        //    return total;
        // }
        return (
            <div key={cartTour.tour_id} className='cart-tour-container'>
                <div className='cart-individual-tour'>
                    <div className='cart-tour-title'>{cartTour.title}</div>
                    <div className='cart-tour-price'>${cartTour.price}</div>
                    <div className='cart-tour-summary'>{cartTour.description}</div>
                    {/* <div>{total}</div> */}
                </div>
            </div>
        )
    });

    return (
        <div className='CartItem'>
            <h2 className='cart-tours-list'>{mappedCart}</h2>
            {/* <div className='tour-images'>
                <div className='images-container'>
                <img className='basic-paris' src='https://res.allmacwallpaper.com/pic/Thumbnails/2558_728.jpg' alt='basic-paris' />
                </div>
                <div className='images-container'>
                <img className='full-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IszB6YE-aDE8YtUGGvVUnZ6e-lPsir5xaA&usqp=CAU' alt='full-paris' />
                </div>
                <div className='images-container'>
                <img className='inclusive-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSaQJtUoaVDpxKRb5z9rH76gqE26v9hQitw&usqp=CAU' alt='inclusive-paris' />
                </div>
                <div className='images-container'>
                <img className='basic-italy' src='https://wallpaperaccess.com/full/115157.jpg' alt='basic=italy' />
                </div>
                <div className='images-container'>
                <img className='full-italy' src='https://s1.1zoom.me/b5346/654/Bridges_Rivers_Evening_Italy_Rome_Cathedral_550636_1920x1080.jpg' alt='full-italy' />
                </div>
                <div className='images-container'>
                <img className='inclusive-italy' src='https://wallpaperaccess.com/full/115111.jpg' alt='inclusive-italy' />
                </div>
            </div> */}
        </div>
    );
}

export default CartItem;