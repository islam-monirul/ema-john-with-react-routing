import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     const [products, setproducts] = useState([]);
     const [cart , setCart]= useState([]);
     const [searchProducts, setSearchProducts] = useState([]);
     
     useEffect( () => {
          // console.log('product API called.');
          fetch('./products.json')
               .then(res => res.json())
                    .then(data => {
                         setproducts(data);
                         setSearchProducts(data);
                         // console.log('products received');
                    });
     },[]);

     useEffect(() => {
          // console.log('local Storage called');
          if(products.length){
               const savedCart = getStoredCart();
               const storedCart = [];

               for(const key in savedCart){
                    // console.log(savedCart[key]);

                    const savedProduct = products.find( product => product.key === key);

                    if(savedCart){
                         storedCart.push(savedProduct);
                         const quantity = savedCart[key];
                         // console.log(quantity);
                         savedProduct.quantity = quantity;
                    }

                    // console.log(savedProduct);
               }

               setCart(storedCart);
          }

     },[products]);
     
     // add to cart event handler function
     const handleAddToCart = (product) => {
          const newCart = [...cart, product];
          setCart(newCart);
          addToDb(product.key);
     }

     const handleSearch = (e) => {
          // console.log(e.target.value);
          const searchText = e.target.value.toLowerCase();
          // console.log(searchText);
          // console.log(searchProduct.length);
          const matchedProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));

          // console.log(matchedProducts.length);
          setSearchProducts(matchedProducts);
     }

     return (
     [
          <div className="search-container">
               <input type="text" placeholder="Search Product" onChange={handleSearch} />
          </div>,
          <div className="shop-container">
               <div className="product-container">
                    <h3>Products</h3>
                    {
                         searchProducts.map( product => <Product key={product.key} product={product} addToCartFunction={handleAddToCart}></Product>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
          </div>
     ]
     );
};

export default Shop;