import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tours = () => {
    const [ toursArr, setToursArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/tours')
            .then(response => {
                setToursArr(response.data)
            })
            .catch(err => console.log(err));
    }, []);
    console.log(toursArr)
    let mappedTours = toursArr.map();
    console.log(mappedTours)
    
    return (
        <div>
            <ul><li>{mappedTours}</li></ul>
        </div>
    );
}

export default Tours;