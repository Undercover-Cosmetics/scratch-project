import React, { useState, useEffect } from 'react';

const Reviews = props => {
  //when there is any update in product state, 
  //fetch for that product reviews from database
  useEffect(() => {
    fetchAndMatchReviews();
  },[props.product]);

  const fetchAndMatchReviews = () => {
    const reviewsBody = {
      'id': props.product.id
    }
    fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(reviewsBody)
    }
    ).then(data => data.json())
    .then(data => {
      console.log('printing response data',data);
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