import React,{useState ,useEffect } from 'react'
import { Row,Alert } from "react-bootstrap";
import Product  from './Product'
import {getallProducts} from './service'


const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(()=>{
    return false
  })

  setTimeout(()=>{
    setShow(false)
  },3000)
  useEffect(() => {
    // getallProducts().then( res=> 
    //   {setProducts(res)
    //     console.log(res)
    //     console.log(products)
    //   })
    getallProducts().then((res) => {
      console.log(res.data);
      setProducts(res.data)
  })
  .catch((err) => {
      console.error('Error:', err);
      
  });
    
    
  }, []);
  return (
    <>
    {console.log(products)}
      
      <Alert variant="success"  >
      <Alert.Heading>Hey, Welcome To Our shop</Alert.Heading>
      <p>
        thank you for choosing our store
      </p>
    </Alert>
    
      
    <Row  xs={1} md={2}  className='py-5 px-5'>
    {products.map((p)=>(
   
        
       <Product key={p.name} p={p} setShow={setShow}  ></Product>
      
      
    ))}
    </Row>
    {
      show === true &&
      <Alert variant="primary"  >
      
      <p>
        you bought an item
      </p>
    </Alert>
    }
    </>
  )
}

export default Products