import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import News from './components/news';
import Fiveday from './components/fiveday';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} />
          <Route path="/fiveday" element={<Fiveday />} />
        </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

