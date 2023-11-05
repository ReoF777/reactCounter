import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Count from './components/Count';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click me!");

  function countUp(){
    setCount(count + 1);
    setText("Clicked!");
  }

  return (
    <div className="App">
      <h1>Click Counter</h1><div/>
      <div class="countButton">
      <Button text={text} onClick={ ()=> {countUp()} }/>
      </div>
      <div class="countNum">
        <Count count={count}/>
      </div>
    </div>
  );
}

export default App;
