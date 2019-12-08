import React from 'react';

function App() {
  return (
    <div>
      <label htmlFor="bar">bar : </label>
      <input id="bar" type="text" onClick={() => { console.log("I am Clicked") }} />
    </div>
  );
}

export default App;
