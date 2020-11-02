import React, { useState, useEffect } from 'react';

const Reviews = props => {
  //when there is any update in product state, 
  //fetch for that product reviews from database
  const [reviewsArr, setReviewsArr] = useState([]);
  const reviews = [];
  //review_rating: 4
  //review_text: "this is a test"
  for(let i = 0; i < reviewsArr.length; i++){
    reviews.push(<div key={i}>
      <p>username</p>
      <p>{reviewsArr[i].review_rating}</p>
      <p>{reviewsArr[i].review_text}</p>
    </div>);
  }

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
      setReviewsArr(data);
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
          {reviews}
        </div>
    )
}


export default Reviews