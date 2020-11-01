import React from 'react';
import UserInput from './UserInput';
// import Reviews from './Reviews';

const Product = props => {
  // console.log('in product', props);
  return (
    <div>
      <div className="mainProductdiv">
        <div className="productHolder"> 
          <h3>{props.product.brand+' '+props.product.name}</h3>
          <div className="imageHolder">
            <img src={props.product.image_link} alt="product picture"/>
          </div>
          <div className="productInfo"><p>{props.product.description}</p></div>
        </div>
      </div>
    
      <UserInput product={props.product}/>
      {/* <Reviews product={product}/> */}
    </div>
  )
}

//component did mount 


//component update 

//render
export default Product;