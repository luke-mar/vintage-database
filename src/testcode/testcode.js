// import './App.scss';
// import Header from './components/Header/Header';
// import Card from './components/Card/Card';
// import StoreList from './components/StoreList/StoreList';
// import ItemPage from './components/ItemPage/ItemPage';
// import UploadPage from './components/UploadPage/UploadPage';
// import Footer from './components/Footer/Footer';
// import StorePage from './components/StorePage/StorePage';
// import StorePage2 from './components/StorePage2/StorePage2';
// import StorePage3 from './components/StorePage3/StorePage3';
// import StorePage4 from './components/StorePage4/StorePage4';

// import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from 'axios';

// import firebase from 'firebase/app';
// import 'firebase/database';
// import { getDatabase } from 'firebase/database';
// import { initializeApp } from 'firebase/app';
// import { onValue, ref } from 'firebase/database';
// import 'firebase/firestore';
// import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
// import { collectIdsandDocs } from './utils/utils';

// //Realtime Database Config
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCDDPuRnOWOfKqPuKLF1Q950e5lInhNCU0",
// //   authDomain: "database-v.firebaseapp.com",
// //   databaseURL: "https://database-v-default-rtdb.firebaseio.com",
// //   projectId: "database-v",
// //   storageBucket: "database-v.appspot.com",
// //   messagingSenderId: "456906384198",
// //   appId: "1:456906384198:web:36822f77a4de5c9c5bbb47",
// //   measurementId: "G-12MXJWR5SE"
// // };

// // Initialize Realtime Database
// // const appF = initializeApp(firebaseConfig);
// // export const db = getDatabase(appF);
// //const analytics = getAnalytics(appF);

// //Firestore Database Config
// const firebaseConfig = {
//   apiKey: "AIzaSyBO3tlr4nDe9mEPtmTDMkwQqVy_i8IUMpc",
//   authDomain: "database2-39279.firebaseapp.com",
//   projectId: "database2-39279",
//   storageBucket: "database2-39279.appspot.com",
//   messagingSenderId: "918477369356",
//   appId: "1:918477369356:web:d895e47847fab5d982fe29",
//   measurementId: "G-F06156X9QW"
// };

// // Initialize Firebase
// const appF = initializeApp(firebaseConfig);
// const db = getFirestore(appF);
// //const analytics = getAnalytics(appF);

// function App() {
//   const [allProducts, setAllProducts] = useState([]);
//   const [nickname, setNickname] = useState('');

//   //Pull Data from local Back-end
//   // useEffect(() => {
//   //   axios.get('http://localhost:8080/products/')
//   //     .then((response) => {
//   //       if(response.data){
//   //         setAllProducts(response.data);
//   //       }
//   //     });
//   // }, []);

//   //Pull Data from Realtime Database
//   // useEffect(() => {
//   //   const query = ref(db, '/');
//   //   return onValue(query, (snapshot) => {
//   //     const data = snapshot.val();

//   //     if (snapshot.exists()) {
//   //       Object.values(data).map((product) => {
//   //         setAllProducts((products) => [...products, product]);
//   //       });
//   //     }

//   //   });
//   // }, []);

//   useEffect(async() => {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const results = querySnapshot.docs.map(collectIdsandDocs);
//     setAllProducts(results);
//   }, []);


//   return (
//     <>
//       <Header />
//       <StoreList />
//       <Routes>
//         <Route path="/" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/all" element={<Card allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/store1" element={<StorePage allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/store2" element={<StorePage2 allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/store3" element={<StorePage3 allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/store4" element={<StorePage4 allProducts={allProducts} setNickname={setNickname}/>} />
//         <Route path="/item/:id" element={<ItemPage nickname={nickname} allProducts={allProducts}/>} />
//         <Route path="/upload" element={<UploadPage />} />
//       </Routes> 
      
//       <Footer /> 
//     </>
//   );
// }

// export default App;
