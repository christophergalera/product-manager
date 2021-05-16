import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductDetails from './productDetails';

const ProductForm = (props) => {
    const { submitHandler, errors, product, setProduct, buttonLabel} = props;


    const inputChange = (e) => {
        console.log("input name: " + e.target.name);
        const inputName = e.target.name;
        console.log("input value: " + e.target.value);
        const inputValue = e.target.value;

        let updatedProduct = { ...product };
        updatedProduct[inputName] = inputValue;

        setProduct(updatedProduct);
    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
            <label>Title</label>
            {
                //this checks to see if key exists inside of the errors state object
                //if it exists, show the error, else show nothing
                errors.title ?
                <span className = "error-text"> {errors.title.message} </span>
                : null
            }
            {
                //example of front-end validation
                product.title.length > 0 && product.title.length < 1 ?
                <span className = "error-text"> Your product name must be atleast 1 characters long! </span>
                :null
            }
            <input 
                type="text"
                name="title"
                value={ product.title }
                onChange={ (e) => inputChange(e) }
                />
            </div>
            <div>
            <label>Price</label>
            {
                errors.price ?
                <span className = "error-text"> {errors.price.message} </span>
                : null
            }
            <input 
                type="number"
                name="price"
                value={ product.price }
                onChange={ (e) => inputChange(e) }
                />
            </div>
            <div>
            <label>Description</label>
            {
                errors.description ?
                <span className = "error-text"> {errors.description.message} </span>
                : null
            }
            <input 
                type="text"
                name="description"
                value={ product.description }
                onChange={ (e) => inputChange(e) }
                />
            </div>
            <button>{buttonLabel}</button>
            <button className= "cancelBtn" onClick={() => navigate(-1)}> Cancel </button>
        </form>
        </div>
    )
    }

export default ProductForm;
