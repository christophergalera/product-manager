import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , navigate } from '@reach/router';

const AllProducts = (props) => {
    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(() => {
    // axios call the route for getAll
    axios.get('http://localhost:8000/api/productmanager/')
        .then((res) => {
            console.log(res.data);  // this is the body that we see in postman's results
            setAllProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/productmanager/' + productId)
            .then((res) => {
                console.log(res.data);
                let filteredProduct = allProducts.filter((oneProduct) => {
                // returning true will keep the hero object in the returned array
                // returning false will prevent the hero object from being in the returned array.
                return oneProduct._id !== productId;
                })
        
                setAllProducts( filteredProduct);
            })
            .catch((err) => {
                console.log(err);
                navigate('/');
            })
        }
    
    return (
        <div>
            <h1>All Products: </h1>
            <table>
                <thead>
                <th>Product</th>
                <th>Actions</th>
                </thead>
                <tbody>
                {
                    allProducts.map(( product, index ) => (
                        <tr>
                            <td>
                                <Link to={ "/products/" + product._id }>{ product.title }</Link>
                            </td>
                            <td>
                                <button className="editBtn" onClick={() => navigate('/products/' + product._id + '/edit')}>Edit</button>
                                <button className="deleteBtn" onClick={() => deleteProduct(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts;
