import React, { useState } from 'react';
import Reviews from './Reviews';


const UserInput = props => {
  // console.log(props);
    return (
        <div className="userInput">
          <h1>User Input</h1>
          <form>
            <input type='text' name='username'></input>
            <input type='text' name='password'></input>
            <button onClick={(e)=>{e.preventDefault()}}>Submit</button>
          </form>
          <Reviews product={props.product}/>
        </div>
    )
}


export default UserInput