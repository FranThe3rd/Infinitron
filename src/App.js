import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
