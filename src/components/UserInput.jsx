import React from 'react';


const UserInput = props => {
    return (
        <div className="userInput">
          <h1>User Input</h1>
          <form>
            <input type='text' name='username'></input>
            <input type='text' name='review'></input>
            <button onClick={(e)=>{e.preventDefault()}}>Submit</button>
          </form>
        </div>
    )
}


export default UserInput