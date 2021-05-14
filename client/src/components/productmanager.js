import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';

const NewProductManager = (props) => {
    const [ newProductManager, setProductManager] = useState({
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
        let updateProductManager = {...newProductManager}
        updateProductManager[inputName] = inputValue;

        setProductManager(updateProductManager)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/productmanager', newProductManager)
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
                    value= { newProductManager.title}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <div>
                    <label> Price </label>
                    <input
                    type="integer"
                    name="price"
                    value= { newProductManager.price}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <div>
                    <label> Description </label>
                    <input
                    type="text"
                    name="description"
                    value= { newProductManager.description}
                    onChange= {(e) => inputChange(e) }/>
                </div>
                <button>Create </button>
            </form>
        </div>
    )
}

export default NewProductManager;