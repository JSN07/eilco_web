import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditName from '../EditName/EditName';

type TestProps = {
	name: string;
	firstname: string;
};

const Test = ({name, firstname} : TestProps) => {
  
  const [number, setNumber] = useState(0);
  const [pair, setPair] = useState(true);
  const [test, setTest] = useState(0);

  useEffect(() => {
    setPair(number % 2 === 0);
    console.log("ici");
  }, [number])

  const toto = async () => {
    axios.get('https://swapi.dev/api/').then(res => {
      console.log(res.data);
    })

    const result = await axios.get('https://swapi.dev/api/');
    console.log(result.data);
  }

  return (
    <div>
      {`Bonjour ${firstname} ${name}`}<br/>
      <EditName updateName={(e: any) => {console.log(e.target.value)}} />
      <Button variant="danger" onClick={() => {setNumber(number-1)}}>-</Button>
      {number}
      <Button variant="primary" onClick={() => {setNumber(number+1)}}>+</Button>

      <Button variant="warning" onClick={() => {setTest(test+1)}}>Test</Button>
      {test}

      <Button variant="secondary" onClick={toto}>Fetch</Button>

      {pair && <p>Il s'agit d'un nombre pair</p>}
    </div>
      
  )
}

export default Test;
