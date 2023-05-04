import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import StoreList from './components/StoreList/StoreList';
import ItemPage from './components/ItemPage/ItemPage';

function App() {
  return (
    <>
      <Header />
      <StoreList />
      <ItemPage />
      {/* <Card /> */}
    </>
  );
}

export default App;
