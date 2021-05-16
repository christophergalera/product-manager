import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import AllProducts from './allProducts'

const NewProduct = (props) => {
    const [ newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const inputChange = (e) => {
        console.log("input name: " + e.target.name);
        const inputName = e.target.name;
        console.log("input value: " + e.target.value)
        const inputValue = e.target.value;
        // ... creates a copy of the entire newHero Object and puts the copy in updatedHero 
        let updateProductManager = {...newProduct}
        updateProductManager[inputName] = inputValue;

        setNewProduct(updateProductManager)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/productmanager', newProduct)
            .then((res) => {
            console.log(res.data);
            // navigate("/");
            })
            .catch((err) => {
                console.log(err);      
            })

    }


    return ( 
        <div>
            <h1>Product Manager</h1> 
            <form onSubmit= {submitHandler}>
                <div>
                    <label> Title </label>
                    <input
                    type="text"
                    name="title"
                    value= { newProduct.title}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <div>
                    <label> Price </label>
                    <input
                    type="integer"
                    name="price"
                    value= { newProduct.price}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <div>
                    <label> Description </label>
                    <input
                    type="text"
                    name="description"
                    value= { newProduct.description}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <button>Create </button>
            </form>
            <AllProducts/>
        </div>
    )
}

export default NewProduct;