import React from 'react';
import UserInput from './UserInput';
import Reviews from './Reviews';

const Product = props => {
  return (
    <div>
      <div className="mainProductdiv">
        <div className="productHolder"> 
          <div className="imageHolder"><p>image</p></div>
          <div className="productInfo"><p>info</p></div>
        </div>
      </div>
    
      <UserInput />
      <Reviews />
    </div>
  )
}

//component did mount 


//component update 

//render
export default Product;