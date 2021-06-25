import React from 'react';
//Routing
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Component
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NoteFound';

//style

import { GlobalStyle } from './GlobalStyle';


const App = () => (
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:movieId' element={<Movie/>} />
          <Route path='/*' element={<NotFound />} />
          
        </Routes>
        
        <GlobalStyle />
    </Router>
      
  
  );


export default App;
