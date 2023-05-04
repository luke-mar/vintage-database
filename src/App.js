import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import StoreList from './components/StoreList/StoreList';
import ItemPage from './components/ItemPage/ItemPage';

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <StoreList />

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/all" element={<Card />} />
        <Route path="/item" element={<ItemPage />} />
        
      </Routes>  
    </>
  );
}

export default App;
