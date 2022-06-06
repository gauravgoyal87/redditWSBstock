import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, Navigate,Router } from "react-router-dom";
import Stocks from './Component/stocks';
import Home from './Component/home';
import Reddit from './Component/redditwsb';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Link to="/">
        <h2>HOME</h2>
        </Link>
        <Link to="/reddit">

        <h2>Reddit</h2>
        </Link>
        <Link to="/stocks">
        <h2>Stocks</h2>
        </Link>
        <h2>future dropdown</h2>
       
      </header>
    <main>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reddit" element={<Reddit />}/>
        <Route path="/stocks" element={<Stocks />}/>

      </Routes>
    </main>

  
    </div>
  );
}

export default App;
