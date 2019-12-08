import React from 'react';
// import React, {Conponent} from 'react';

// class App extends Conponent {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello</h1>
//       </React.Fragment>
//     )
//   }
// }

function App() {
  return (
    <div>
      <Dog />
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
}

function Dog() {
  return <div>Won!</div>
}

export default App;
