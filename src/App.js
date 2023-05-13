import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import StoreList from './components/StoreList/StoreList';
import ItemPage from './components/ItemPage/ItemPage';
import UploadPage from './components/UploadPage/UploadPage';
import Footer from './components/Footer/Footer';
import StorePage from './components/StorePage/StorePage';
import StorePage2 from './components/StorePage2/StorePage2';
import StorePage3 from './components/StorePage3/StorePage3';
import StorePage4 from './components/StorePage4/StorePage4';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import 'firebase/database';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { collectIdsandDocs } from './utils/utils';

//Firestore Database Config
// const firebaseConfig = {
//   apiKey: "AIzaSyBO3tlr4nDe9mEPtmTDMkwQqVy_i8IUMpc",
//   authDomain: "database2-39279.firebaseapp.com",
//   projectId: "database2-39279",
//   storageBucket: "database2-39279.appspot.com",
//   messagingSenderId: "918477369356",
//   appId: "1:918477369356:web:d895e47847fab5d982fe29",
//   measurementId: "G-F06156X9QW"
// };

// Initialize Firebase
// const appF = initializeApp(firebaseConfig);
// const db = getFirestore(appF);


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [nickname, setNickname] = useState('');

  //Pull Data from local Back-end
  useEffect(() => {
    axios.get('http://localhost:8080/products/')
      .then((response) => {
        if(response.data){
          setAllProducts(response.data);
        }
      });
  }, []);


  //Pull Data From Firestore Database
  // useEffect(async() => {
  //   const querySnapshot = await getDocs(collection(db, "products"));
  //   const results = querySnapshot.docs.map(collectIdsandDocs);
  //   setAllProducts(results);
  // }, []);


  return (
    <>
      <Header />
      <StoreList />
      <Routes>
        <Route path="/" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/all" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/store1" element={<StorePage allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/store2" element={<StorePage2 allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/store3" element={<StorePage3 allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/store4" element={<StorePage4 allProducts={allProducts} setNickname={setNickname}/>} />
        <Route path="/item/:id" element={<ItemPage nickname={nickname} allProducts={allProducts}/>} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes> 
      
      <Footer /> 
    </>
  );
}

export default App;
