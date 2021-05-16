import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import AllProducts from './allProducts'
import ProductForm from './productForm'

const NewProduct = (props) => {
    const [ newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    })


  const [ errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/productmanager', newProduct)
            .then((res) => {
            console.log(res.data);
            navigate("/")
            })
            .catch((err) => {
                console.log(err); 
                setErrors(err.response.data.errors);     
            })

    }

    return ( 
        <div>
            <h1>Product Manager</h1> 
            <ProductForm 
                submitHandler={ submitHandler } 
                errors= { errors } 
                product={ newProduct } 
                setProduct = { setNewProduct }
                buttonLabel= {"Submit Product"} />
            <AllProducts/>
        </div>
    )
}

export default NewProduct;