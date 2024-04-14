//parent component
//will need to import child
import Greeting from './Greeting';



function App() {
  return (
    <>
    <Greeting color = "green" name="Bob"/>
    <Greeting color = "blue" name="George"/>
    <Greeting color = "red" name="Sue"/>
    </>
  );
}

export default App;
