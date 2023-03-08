import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import Nav from './entete';
import Header from './Header';
import './index.css'
import  Frame  from './calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
      <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Header/>}/>
        <Route path='/calc' element={<Frame/>}/>


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

