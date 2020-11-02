import React from 'react';
import UserLogin from './UserLogin';
// import Reviews from './Reviews';

const Product = props => {
  return (
    <div>
      <div className="mainProductdiv">
        <div className="productHolder"> 
          <h3>{props.product.brand+' '+props.product.name}</h3>
          <div className="imageHolder">
            <img src={props.product.image_link} alt={props.product.brand+' '+props.product.name+" picture"}/>
          </div>
          <div className="productInfo"><p>{props.product.description}</p></div>
        </div>
      </div>
    
      <UserLogin product={props.product}/>
      {/* <Reviews product={product}/> */}
    </div>
  )
}

export default Product;