import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';

const ProductDetails = (props) => {
    const {id} = props;
    const [product , setproduct] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/productmanager/" + id)
        .then((res) => {
            console.log(res.data);
            setproduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    return ( 
        <div>
            <h1>{ product.name }</h1>
            <img src={product.imageUrl } alt={product.name} style={{maxWidth:"200px"}}/>
            <p>
                Title: {product.title}
            </p>
            <p>
                Price: {product.price}
            </p>
            <p>
                Description: {product.description}
            </p>
        </div>
    )
}

export default ProductDetails;