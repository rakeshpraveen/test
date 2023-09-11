import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
      {/* <h1 className='bg-yellow-400'>hello World </h1> */}
      {/* <h1 className='bg-slate-100 font-bold'>hello World </h1> */}
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
    </Routes>

    </div>
  );
}

export default App;
