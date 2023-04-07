import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.products.map((product, idx) => {
                return <div key={idx}>
                    <h2>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </h2>
                    {/* <p>{product.description}</p>
                    <p>Price: ${product.price}</p> */}
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    <hr />
                </div>
            })}
        </div>
    )
}
    
export default ProductList;
