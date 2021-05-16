import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllProducts = (props) => {
    const [ allProducts, setallProducts ] = useState([]);

    useEffect(() => {
    // axios call the route for getAll
    axios.get('http://localhost:8000/api/productmanager/')
        .then((res) => {
            console.log(res.data);  // this is the body that we see in postman's results
            setallProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <div>
        <h1>All Products: </h1>
            {
                allProducts.map(( product, index ) => (
                    <p key={ index }>
                        <Link to={"/products/" + product._id }> { product.title }</Link>
                    </p>
                ))
            }
        </div>
    )
}

export default AllProducts;
