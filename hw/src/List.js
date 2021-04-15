import logo from './logo.svg';
import './App.css';
import Catalog from "./components/catalog.js"
import Bookadd from "./components/Bookadd.js"
import { NavLink } from "react-router-dom";
function List() {

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
      <NavLink to="/create" >
            <button className="btn btn-primary">CRATE </button>
        </NavLink>
        <div className="col">
          <h1>Books</h1>
        </div>
      </div>
      <Catalog />
    </div>
  );
}

export default List;
