import logo from './logo.svg';
import './App.css';
import BasicExample from './react-bootsrap/main';
import VariationsExample from './react-bootsrap/badge';
import UncontrolledExample from './react-bootsrap/card';
import LinkedExample from './react-bootsrap/listgroup';
import StaticExample from './react-bootsrap/model';
import Textlist from './react-bootsrap/Textlist';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <VariationsExample/>
        <BasicExample/>
        <UncontrolledExample/>
        <LinkedExample/>
        <StaticExample/> */}
        <Textlist/>
      {/* </header> */}
    </div>
  );
}

export default App;
