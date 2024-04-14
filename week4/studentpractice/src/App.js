// two ways to add event listener

/*
function App() {
  const clickHandler = () => console.log("My favorite is green")
  function onChangeHandler (){
    console.log("changed");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <input type="number" onChange = {onChangeHandler}/>
    </div>
  );
}

export default App;
*/

import {useState} from "react";

function App() {

  const clickHandler = () => setCount(count+1);
  //creating a useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={clickHandler}>Counter</button>
      <div>
        Current Count: {count}
      </div>
    </div>
  );
}

export default App;
