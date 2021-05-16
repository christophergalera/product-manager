import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './productForm';

const EditProduct = (props) => {
    const { id } = props;

    const [ editProduct, setEditProduct ] = useState({
        title: "",
        price: "",
        description: "",
    });

  const [ errors, setErrors ] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/productmanager/" + id)
      .then((res) => {
        console.log(res.data);
        setEditProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      })
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/productmanager/' + id, editProduct)
      .then((res) => {
        console.log(res.data);
        // go to the details page when it is successful
        navigate("/products/" + id);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        setErrors(err.response.data.errors);
      })
  }

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
      <h1>Edit Product</h1>
      <ProductForm 
        submitHandler={ submitHandler } 
        errors={ errors } 
        product={ editProduct } 
        setProduct={ setEditProduct }
        buttonLabel={"Update Product"}
        />
      <button className="deleteBtn" onClick={ deleteProduct }>Delete Product </button>
    </div>
  )
}

export default EditProduct;
