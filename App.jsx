/* React Hook */

import React, { useState } from "react";

const App = () => {

  const state = useState();
  // console.log(state);

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    // console.log("clicked");
  };

  return (
    <>
    <h1> {count} </h1>
    <button onClick={IncNum}> Click Me </button>
    </>
  );
};

export default App;




/* React Hooks Challenge*/

import React, { useState } from 'react';

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  return (
    <>
    <h1> {cTime} </h1>
    <button onClick={UpdateTime}> Get Time </button>
    </>

  );
}

export default App;
