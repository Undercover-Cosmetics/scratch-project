import React, { useState } from 'react';
import Reviews from './Reviews';


const UserInput = props => {
  // console.log(props);
  const [valid, setValid] = useState(false);
  return (
    <div className="userInput">

      {/* <form>
            <input type='text' name='username'></input>
            <input type='text' name='password'></input>
            <button onClick={(e)=>{e.preventDefault()}}>Submit</button>
          </form> */}
      <Reviews product={props.product} />
    </div>
  )
}


export default UserInput