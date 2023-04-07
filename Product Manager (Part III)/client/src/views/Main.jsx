import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    };

    return (
        <div>
            <h3>Product Manager</h3>
            <ProductForm />
            <hr />
            <h3>All Products:</h3>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;
