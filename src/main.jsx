import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RestOfCode from './components/RestOfCode';
import './index.css';
import Contacts from './pages/Contacts';
import Overview from './pages/Overview';
import Tickets from './pages/Tickets';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/ideas' element={<RestOfCode />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/agents' element={<RestOfCode />} />
        <Route path='/article' element={<RestOfCode />} />
        <Route path='/settings' element={<RestOfCode />} />
        <Route path='/subscription' element={<RestOfCode />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
