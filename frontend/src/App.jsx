import { Routes, Route } from 'react-router-dom';



import Home from './components/pages/Home';
import Coffee from './components/pages/Coffee';
import Bakery from './components/pages/Bakery';
import Menu from './components/pages/Menu';
import GoTop from './components/GoTop/GoTop';
import Order from './components/pages/Order';
import Payment from './components/pages/Payment';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <>
      <Navbar />

      <GoTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/caphe' element={<Coffee />} />
        <Route path='/bakery' element={<Bakery />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
