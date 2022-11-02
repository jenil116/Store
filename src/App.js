
import React from "react";
import {Navbar,Home,Collection,Cart,CartObj} from './components';

import { Box } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import { useState } from 'react';

function App() {
  const [val, setval] = useState()
  const [id, setid] = useState()
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/collection' exact element={<Collection/>} />
        <Route path='/Cart' exact element={<Cart setval={setval} setid={setid}/>}  />
        <Route path='/product/:id' exact element={<Product val={val}  id={id}/>} />
        <Route path='/CartObj' exact element={<CartObj/>} />
      </Routes>
    </Box>
    </BrowserRouter>
    );
    
  }
export default App;
