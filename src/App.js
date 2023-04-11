//import logo from './logo.svg';
import './App.css';
import Products from './Component/Products'
import NavBar from './Component/NavBar'
import Notfound from './Component/Notfound'
import ProductDetails from './Component/ProductDetails'
import AddProduct from './Component/AddProduct'
import UpdateProduct from './Component/UpdateProduct'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  
  
  return (
    <>
    <Router>
    <NavBar/>
      <main className='py-4'>
      <Container>
        <Routes>
          <Route path='/' element={<Products /> } exact /> 
          <Route path='/product/:name' element={<ProductDetails /> }  /> 
          <Route path='/addproduct' element={<AddProduct /> }  /> 
          <Route path='/updateproduct/:name' element={<UpdateProduct /> }  /> 
          <Route path='*' element={<Notfound />} /> 
        </Routes>
      </Container>
      </main>
      
    </Router>
    </>
  );
}

export default App;
