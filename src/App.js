import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import StarWarsPeeps from "./components/StarWarsPeeps";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people`).then(response => {
      console.log(response.data);
      const Peeps = response.data.results;
      setData(Peeps);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {data.map(props => {
          return <StarWarsPeeps limit={10}
            name={props.name}
            gender={props.gender}
            haircolor={props.hair_color}
            eyecolor={props.eye_color}
            height={props.height}
            mass={props.mass}
          />
        })}
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
