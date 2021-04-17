import axios from 'axios';

const initialState = {
    toursCart: []
};

const REQUEST_CART_DATA = 'REQUEST_CART_DATA';
const BOOK_TOUR = 'BOOK_TOUR';
const REMOVE_TOUR = 'REMOVE_TOUR';
// is this where changeTier would go???

export const requestCartData = () => {
    let data = axios.get('/api/cart')
        .then(response => response.data)
        .catch(err => console.log(err));

        return {
            type: REQUEST_CART_DATA,
            payload: data
        };
}

export const bookTour = (price, title, summary) => {
    let data = axios.post('/api/tours', {
        price,
        title,
        summary
    })
        .then(response => response.data)
        .catch(err => console.log(err));

        return {
            type: BOOK_TOUR,
            payload: data
        };
}

export const removeTour = (id) => {
    let data = axios.delete(`/api/cart/${id}`)
        .then(response => response.data)
        .catch(err => console.log(err));

        return {
            type: REMOVE_TOUR,
            payload: data
        };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CART_DATA:
            return {
                ...state,
                ...action.payload
            };

        case BOOK_TOUR:
            return {
                ...state,
                toursCart: action.payload
            };

        case REMOVE_TOUR:
            return {
                ...state,
                toursCart: action.payload
            };

        default:
            return state;
    }
}