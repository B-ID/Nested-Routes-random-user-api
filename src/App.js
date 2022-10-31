import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested routes */}
        <Route path=""></Route>
        <Route path="users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
