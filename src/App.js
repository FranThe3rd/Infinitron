import './App.css';
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Ad from './components/ad/ad'
import FinancePage from './pages/finance-page/finance-page';
import ReviewPage from './pages/review-page/review-page';
import PreLoader from './components/preloader/preloader';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <PreLoader />
        <Ad />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-page" element={<ReviewPage />} />
          <Route path="/finance-page" element={<FinancePage />} />

        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
