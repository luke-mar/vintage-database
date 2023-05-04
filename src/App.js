import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import StoreList from './components/StoreList/StoreList';
import ItemPage from './components/ItemPage/ItemPage';
import UploadPage from './components/UploadPage/UploadPage';
import Footer from './components/Footer/Footer';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/products/')
      .then((response) => {
        if(response.data){
          setAllProducts(response.data);
        }
      });
  }, []);

  return (
    <>
      <Header />
      <StoreList />

      <Routes>
        <Route path="/" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/all" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/item/:id" element={<ItemPage nickname={nickname} allProducts={allProducts}/>} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes> 
      
      <Footer /> 
    </>
  );
}

export default App;
