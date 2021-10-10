import React from 'react';

const Cart = (props) => {
     // console.log(props.cart);

     const {cart} = props;
     // console.log(cart);
     // console.log(typeof(cart));

     const cartBag = [];

     for(const product of cart){
          if( !cartBag.includes(product)){
               cartBag.push(product);
          }
     }

     let total = 0;
     cartBag.forEach( (product) => {
          total = total + product.price;
     });

     // const total = cart.reduce( (previous, product)  => previous + product.price, 0);
     const shipping = total > 0 ? 15 : 0;
     const tax = (total + shipping) * 0.10;
     const grandTotal = total + shipping + tax;

     return (
          <div>
               <h3>Order Summary</h3>
               <h5>Items ordered: {cartBag.length}</h5>
               <p>Total Cost : {total.toFixed(2)}</p>
               <p>Shipping Cost : {shipping}</p>
               <p>Tax : {tax.toFixed(2)}</p>
               <p>Grand Total : {grandTotal.toFixed(2)}</p>
          </div>
     );
};

export default Cart;