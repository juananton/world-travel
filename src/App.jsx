import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path='cities' element={<CityList />} />
          <Route path='countries' element={<CountryList />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
