import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     const [products, setproducts] = useState([]);
     const [cart , setCart]= useState([]);
     const [displayProduct, setDisplayProduct] = useState([]);
     
     useEffect( () => {
          fetch('./products.json')
               .then(res => res.json())
                    .then(data => {
                         setproducts(data);
                         setDisplayProduct(data);
                    });
     },[]);
     
     // add to cart event handler function
     const handleAddToCart = (product) => {
          // console.log(...cart);
          // using spread operator
          // console.log(product);
          const newCart = [...cart, product];
          setCart(newCart);
          // console.log(newCart);
     }

     const handleSearch = e => {
          // console.log(e.target.value);
          const searchText = e.target.value;
          const matchedProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));

          setDisplayProduct(matchedProducts);
          console.log(matchedProducts.length);
     }

     return (
          [<div className="search-container">
               <input type="text" placeholder="Search Product" onChange={handleSearch}/>
          </div>,
          <div className="shop-container">
               <div className="product-container">
                    <h3>Products</h3>
                    {
                         displayProduct.map( product => <Product key={product.key} product={product} addToCartFunction={handleAddToCart}></Product>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
          </div>]
     );
};

export default Shop;