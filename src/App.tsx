import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    return (
        <div className="App">
          <Todolist title={"What to learn"}/>
          <Todolist itle={"What to bye"}/>
          <Todolist tite={"What to sell"}/>
        </div>
    );
}

export default App;


