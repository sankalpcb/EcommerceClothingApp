
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CardMenu from './containers/CardMenu';
import SignUpPage from './containers/SignUpPage';
import ShopPage from './containers/ShopPage';
import Category from './components/Category';
import CheckoutTable from './components/CheckoutTable';
import ContactPage from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<CardMenu/>}/>
        <Route path='/shop/:categoryId' element={ <Category/>} />
        <Route path='/shop' element={ <ShopPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/checkout' element={<CheckoutTable/>}/>
      </Routes>

    </div>
  );
}

export default App;
