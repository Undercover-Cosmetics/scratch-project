import React, { useState, useEffect } from 'react';
import { post } from '../../server/server';


const Reviews = props => {

  useEffect(() => {
    fetchAndMatchReviews();
  },[]);

  const fetchAndMatchReviews = () => {
    const reviewsBody = {
      id: props.product.id
    }
    fetch('./api/reviews', {
      method: 'POST',
      header: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(reviewsBody)
    }).then(data => data.json())
    .then(data => {
      console.log(data);
    })
  };
    return (
        <div className="reviewContainer">
          <h1>Review Input</h1>
          <div className="reviews">
          <p>Yo thiss product is sooo coool</p>
          <button>EDIT
          </button>
          <button>DELETE</button></div>
        </div>
    )
}


export default Reviews