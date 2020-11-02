import React, { useState, useEffect } from 'react';

const Reviews = props => {
  const [username, setUsername] = useState('');
  const [userReview, setUserReview] = useState('');

  //when there is any update in product state, 
  //fetch for that product reviews from database
  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    fetchAndMatchReviews();
  }, [props.product]);

  const reviews = [];

  for (let i = 0; i < reviewsArr.length; i++) {
    reviews.push(
      <div key={i} className='review'>
        <p>username</p>
        <p>{reviewsArr[i].review_rating}</p>
        <p>{reviewsArr[i].review_text}</p>
      </div>);
  }
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
    }).then(data => data.json())
      .then(data => {
        // console.log('printing response data',data);
        setReviewsArr(data);
      })
  };
  return (
    <div className="reviewContainer">
      <h1>Review Input</h1>
      <div className="reviews">
        <input type='text' value={username} name='username' onChange={(e) => setUsername(e.target.value)}></input>
        <input type='text' value={userReview} name='userReview' onChange={(e) => setUserReview(e.target.value)}></input>
        <button onClick={(e) => {
          e.preventDefault();
          const userReviewObj = {
            'username': username,
            'review': userReview
          }
          fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(userReviewObj)
          }).then(data => data.json()).then(data => {
            setReviewsArr([...reviewsArr, data])
          })
        }}>UPLOAD</button>
        {/* <button>EDIT</button>
          <button>DELETE</button> */}
      </div>
      <p>Yo thiss product is sooo coool</p>
      {reviews}
    </div>
  )
}


export default Reviews