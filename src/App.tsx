import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router";
import Login from './Page/login';
import Register from './Page/register';
import Layout from './Layout';

function App() {
  return (
    <>
     <Routes>
      <Route path="/login" element={<Layout> <Login /></Layout>}/>
      <Route path="/register" element={<Register />}/>
    </Routes>

    </>
   
  );
}

export default App;
