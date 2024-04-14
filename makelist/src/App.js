import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
//Bootstrap Card
import Card from 'react-bootstrap/Card';
//Bootstrap Button
import Button from 'react-bootstrap/Button';


const startlist = [

]

function App() {
  //set state for list
  const [list, setList] = useState(startlist);
  const [name, setName] = useState('');

  //set handlers
  function handleChange(event) {
    setName(event.target.value)
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
  }

  return (
    <>
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Shopping List</Card.Title>

          <input type="text" value={name} onChange={handleChange} /> {' '}
          <Button variant="secondary" onClick={handleAdd}>Add Item</Button>
          <Card.Text>
            <ul>
              {list.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}


            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    </>
  );
}

export default App;
