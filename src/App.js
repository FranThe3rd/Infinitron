import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Ad from './components/ad/ad'
import ReviewPage from './pages/review-page/review-page';
import PreLoader from './components/preloader/preloader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PreLoader />
        <Ad />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-page" element={<ReviewPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
