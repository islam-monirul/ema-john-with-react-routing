import React from 'react';
import useProducts from './../hooks/useProducts';
import useCart from './../hooks/useCart';
import Cart from '../Cart/Cart';
// import Product from './../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';

const OrderReview = () => {
     const [products] = useProducts();
     const [cart, setCart] = useCart(products);
     const history = useHistory();

     const handleRemove = key => {
          console.log(key);
          const newCart = cart.filter( product => product.key !== key);

          setCart(newCart);
          deleteFromDb(key);
     }

     const handlePlaceOrder = () => {
          // cart.forEach( product => {
          //      deleteFromDb(product.key);
          // });
          setCart([]);
          clearTheCart();
          
          history.push('/placeOrder');
     }

     return (
          <div className="shop-container">
               <div className="product-container">
                    {
                         cart.map( product => <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}>
                         <button className="btn-regular" onClick={handlePlaceOrder}>Place Your Order</button>
                    </Cart>
               </div>
          </div>
     );
};

export default OrderReview;<h1>This is Order Review</h1>