import React, { useState, useEffect } from 'react';

const Reviews = props => {
  //state props for inputs
  const [username, setUsername] = useState('');
  const [userReview, setUserReview] = useState('');
  //state props for rating
  const [userRating, setUserRating] = useState(0);
  //state props for edits
  const [userEditedReview, setUserEditedReview] = useState('');
  const [userEditedRating, setUserEditedRating] = useState(0);
  //product reviews from database
  const [reviewsArr, setReviewsArr] = useState([]);
  //flag for edit 
  const[editable, setEditable] = useState(false);

  //check there is any change in product and fetch matching reviews
  useEffect(() => {
    fetchAndMatchReviews();
  },[props.product]);
  
  const reviews = [];
  for(let i = 0; i < reviewsArr.length; i++){
    reviews.push(
      //start of wrapper
      <div key={reviewsArr[i]._id} id={reviewsArr[i]._id} className='review'>
        <div className="userReviewInput"> 
          <p>username</p>
          <p>{reviewsArr[i].review_rating}</p>
          <p>{reviewsArr[i].review_text}</p>

          {editable ? <div className="editable">
            <label for="rating">Rating (between 0 and 5):</label>
              <input type="range" id="vol" name="vol" min="0" max="5" value={userEditedRating} onChange={(e) => {
                // if(//this is the first time))
                setUserEditedRating(Number(e.target.value))
                console.log(userEditedRating);
              
              }}></input>
              <input type='text' placeholder="Input Edits here" value={userEditedReview} name='userEditedReview' onChange={(e) => setUserEditedReview(e.target.value)}></input>

              <button onClick={(e) => {
                e.preventDefault();
                setEditable(false);
                
                const userReviewObj = {
                  'reviewRating': reviewsArr[i].review_rating, 
                  'reviewText': reviewsArr[i].review_text,
                  'reviewId': reviewsArr[i]._id
                }
                // console.log(userReviewObj)
                fetch('/api/editreview', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'Application/JSON'
                  }, 
                  body: JSON.stringify(userReviewObj)
                }).then(data => data.json()).then(data => {
                  console.log(data)
                  setReviewsArr([...reviewsArr, data])
                  // console.log(reviewsArr);
                  
                })

              }}>Submit changes</button>
            
          </div> : null}
            {/* end of conditinal rendering for edit */}
          </div>
          <div className="reviewButtons">
            {/* { reviewRating, reviewText, reviewId} */}
          <button onClick={(e) => {
            // console.log("this is the target", e.target)
            e.preventDefault();
            setEditable(true)
            console.log(e.target)
          
          }}>EDIT</button>
        
          <button onClick={(e) => {
            console.log('in Delete button',i)
            console.log(reviewsArr[i]._id)
            fetchAndDeleteReview(i);
            
          }}>Delete</button>
        </div>
      </div>//end of wrapper
    )//end of push
  }//end of for loop

  const fetchAndMatchReviews = () => {
    const reviewsBody = {
      'id': props.product.id
    }
    fetch('/api/review', {
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
  const fetchAndDeleteReview = (i) => {
    fetch('/api/deletereview', {
      method: 'POST', 
      headers: {
        'Content-Type': 'Application/JSON'
      }, 
      body: JSON.stringify({
        'reviewId': reviewsArr[i]._id
      })
    }).then(data => {
      reviewsArr.splice(i,1)
      setReviewsArr(reviewsArr)
      console.log(reviewsArr)
      fetchAndMatchReviews()
    })
  };
  return (
    <div className="reviewContainer">
      <h1>Review Input</h1>
      <div className="reviews">
        <label for="rating">Rating (between 0 and 5):</label>
          <input type="range" id="vol" name="vol" min="0" max="5" value={userRating} onChange={(e) => {
            setUserRating(Number(e.target.value))
            console.log(userRating);
          
          }}></input>
        <input type='text' placeholder="username" value={username} name='username' onChange={(e) => setUsername(e.target.value)}></input>
        <input type='text' placeholder="Input Review here" value={userReview} name='userReview' onChange={(e) => setUserReview(e.target.value)}></input>
        <button onClick={(e) => {
          e.preventDefault();
          const userReviewObj = {
            'reviewRating': userRating, 
            'reviewText': userReview,
            'productKey': props.product.id
          }
          // console.log(userReviewObj)
          // reviewRating, reviewText, productKey
          fetch('/api/addreview', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            }, 
            body: JSON.stringify(userReviewObj)
          }).then(data => data.json()).then(data => {
            setReviewsArr([...reviewsArr, data])

            console.log(reviewsArr);
          })
        }}>UPLOAD</button>

        </div>
        <div className="reviewRender"></div>
        {/* <p>Yo thiss product is sooo coool</p> */}
        {reviews}
    </div>//end of container
  )//end of return
}


export default Reviews