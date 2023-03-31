import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  let clicksValue = localStorage.getItem('value') || 0;
  const [count, setCount] = useState(clicksValue);

  function increase() {
    clicksValue++;
    localStorage.setItem('value', clicksValue);
    setCount(clicksValue);
  }

  function decrease() {
    clicksValue--;
    localStorage.setItem('value', clicksValue);
    setCount(clicksValue);
  }

  function reset() {
    localStorage.clear();
    clicksValue = 0;
    setCount(clicksValue);
  }

  return (
    <div className="App">
      <div className='container my-5'>
        <h1 className='my-3'>Counter App</h1>
        <div className='card-body'>
          <h2 className='my-5'>{count}</h2>
          <button className='btn btn-danger mx-1' onClick={decrease}>Decrease</button>
          <button className='btn btn-warning text-light mx-1' onClick={reset}>Reset</button>
          <button className='btn btn-success mx-1' onClick={increase}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
