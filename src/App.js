import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Board from './components/Boards/Board'

import React, { useState } from 'react';
import MainHeader from './components/Header/MainHeader';
import TopHeader from './components/Header/TopHeader';
import MainFooter from './components/Footer';

const initialState = [
  {
    id: 'b1',
    title: 'Breakfast Board',
    picture: 'https://something',
    shortDescription: 'The sickest breakfast board for bfast',
    price: '$50'
  },
  {
    id: 'b2',
    title: 'Dessert Board',
    picture: 'https://something',
    shortDescription: 'The sickest breakfast board for bfast',
    price: '$50'
  },
  {
    id: 'b3',
    title: 'App Board',
    picture: 'https://something',
    shortDescription: 'The sickest breakfast board for bfast',
    price: '$50'
  }
]

const App = () => {

  const [boards, setBoards] = useState(initialState);

  return (
    <body>
      <MainHeader />
      <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:boardName' element={<Board />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </main>
      <MainFooter />
    </body>


  );
}

export default App;
