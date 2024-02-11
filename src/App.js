import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Ad from './components/ad/ad'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Ad />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
