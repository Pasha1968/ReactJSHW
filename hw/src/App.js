import logo from './logo.svg';
import './App.css';
import Catalog from "./components/catalog.js"

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h1>Books</h1>
        </div>
      </div>
      <Catalog />
    </div>
  );
}

export default App;
