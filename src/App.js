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
import Login from './components/Login/Login';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios from 'axios';

import 'firebase/database';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { collectIdsandDocs } from './utils/utils';
import './index.css';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

//Firestore Database Config
//Your firebase config object needs to be put here
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apik,
  authDomain: process.env.REACT_APP_ad,
  projectId: "database2-39279",
  storageBucket: "database2-39279.appspot.com",
  messagingSenderId: process.env.REACT_APP_msi,
  appId: "1:918477369356:web:d895e47847fab5d982fe29",
  measurementId: "G-F06156X9QW"
};

// Initialize Firebase
const appF = initializeApp(firebaseConfig);
export const db = getFirestore(appF);
const auth = getAuth(appF);



//App
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [nickname, setNickname] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState('');
  const [changeStockInt, setChangeStockInt] = useState(0);
  const login = async ()=>{
    try {
      const user = await signInWithEmailAndPassword(auth, loginUser, loginPassword);
    } 
    catch(error) {
      console.log(error);
    }
  };
  const logout = async ()=>{
    await signOut(auth);
  };


  //Pull Data from local Back-end
  // useEffect(async() => {
  //   axios.get('http://localhost:8080/products/')
  //     .then((response) => {
  //       if(response.data){
  //         setAllProducts(response.data);
  //       }
  //     });
  // }, []);

  async function updateStock(docNumber){
    const change = {
      stock: false
    };
    const docRef = doc(db, 'products', docNumber);
    await updateDoc(docRef, change);
  }
 
  async function testReload() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const results = querySnapshot.docs.map(collectIdsandDocs);
  setAllProducts(results);
  }

  //Pull Data From Firestore Database
  useEffect(async() => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const results = querySnapshot.docs.map(collectIdsandDocs);
    setAllProducts(results);

  }, []);

  

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
        <Route path="/item/:id" element={<ItemPage nickname={nickname} allProducts={allProducts} updateStock={updateStock} setChangeStockInt={setChangeStockInt} changeStockInt={changeStockInt} testReload={testReload}/>} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} setLoginPassword={setLoginPassword} login={login}/>} />
      </Routes> 
      
      <Footer logout={logout}/> 
    </>
  );
}

export default App;
