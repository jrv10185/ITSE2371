import {useState} from "react";

const style = {
  color: 'green',

};

function App() {
  const dogClickHandler = () => dsetCount(dcount+1)
  const catClickHandler = () => csetCount(ccount+1)
  const otherClickHandler = () => osetCount(ocount+1)
  const [dcount, dsetCount] = useState(0);
  const [ccount, csetCount] = useState(0);
  const [ocount, osetCount] = useState(0);
  return (
    <>
    <header style={style}><strong>This is a pet counter</strong></header>
      <div>
        <button onClick={dogClickHandler}>Dog Counter</button> Dog total: {dcount}
      </div>
      <div>
        <button onClick={catClickHandler}>Cat Counter</button> Cat total: {ccount}
      </div>
      <div>
        <button onClick={otherClickHandler}>Other Counter</button> Other total: {ocount}
      </div>
    </>
  );
}

export default App;
