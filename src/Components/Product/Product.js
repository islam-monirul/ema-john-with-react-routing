import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
// import Rating from 'react-rating';


const Product = (props) => {
     // console.log(props);
     const {name, img, seller, price, stock} = props.product;

     const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

     return (
          <div className="product">
               <div>
                    <img src={img} alt={name} />
               </div>
               <div className="product-info">
                    <h4 className="product-name">{name}</h4>
                    <p><small>by: {seller}</small></p>
                    <p>$ {price}</p>
                    <p><small>
                         Only {stock} left in stock - Order soon
                    </small></p>
               
                    <button className="btn-regular" onClick={() => props.addToCartFunction(props.product)}>{cartIcon} Add to cart</button>
               </div>
          </div>
     );
};

export default Product;