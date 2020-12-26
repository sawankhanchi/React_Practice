/* React useEffect */

import React, { useState, useContext, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    // alert("I am clicked");
    // console.log("I am clicked");
    document.title = `you clicked me ${num} times`;
  }, [num]);

  return (
    <>
    <button 
      onClick={() => {
        setNum(num + 1);
      }
     } 
    > 
      Click me {num} 
    </button>
    <br />
    <button 
      onClick={() => {
        setNums(nums + 1);
      }
     } 
    > 
      Click me {nums} 
    </button>
    </>
  )
};

export default App;
