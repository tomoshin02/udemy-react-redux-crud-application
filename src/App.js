import React,{Component} from 'react';

// function App() {
//   return <div><p>thanks,world.</p></div>;
// }

// function App() {
//   return React.createElement(
//   "div",
//   null,
//   "Hello, World!"
//   );
// }

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <label htmlFor="bar">bar</label>
       <input type= "text" onChange={() => {console.log("It was changed.")}} />
    </React.Fragment>
    )
  }
}

export default App;
