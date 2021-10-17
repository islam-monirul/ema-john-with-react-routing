import React from 'react';

const ReviewItem = (props) => {
     const {name, price, quantity} = props.product;
     console.log(props);
     const {handleRemove} = props;
     return (
          <div className="product">
               <div>
                    <h4 className="product-name">{name}</h4>
                    <p>Price : {price}</p>
                    <p>Quantity : {quantity}</p>
                    <button className="btn-regular" onClick={() => handleRemove(props.product.key)}>Remove</button>
               </div>
          </div>
     );
};

export default ReviewItem;