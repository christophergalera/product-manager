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
    
    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/productmanager/' + id)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                navigate('/');
            })
        }
        
    return ( 
        <div>
            <h1>{ product.title }</h1>
            <p>
                Title: {product.title}
            </p>
            <p>
                Price: {product.price}
            </p>
            <p>
                Description: {product.description}
            </p>
            <button className="deleteBtn" onClick={ deleteProduct }>Delete Product </button>
        </div>
    )
}

export default ProductDetails;