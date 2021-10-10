import React from 'react';

const Cart = (props) => {

     const {cart} = props;
     // console.log(cart);

     let total = 0;
     let totalQuantity = 0;
     for(const product of cart){
          product.quantity = !product.quantity ? 1 : product.quantity;
          total = total + product.price * product.quantity;
          totalQuantity = totalQuantity + product.quantity;
     }

     // const total = cart.reduce( (previous, product)  => previous + product.price, 0);
     const shipping = total > 0 ? 15 : 0;
     const tax = (total + shipping) * 0.10;
     const grandTotal = total + shipping + tax;

     return (
          <div>
               <h3>Order Summary</h3>
               <h5>Items ordered: {totalQuantity}</h5>
               <p>Total Cost : {total.toFixed(2)}</p>
               <p>Shipping Cost : {shipping}</p>
               <p>Tax : {tax.toFixed(2)}</p>
               <p>Grand Total : {grandTotal.toFixed(2)}</p>
          </div>
     );
};

export default Cart;