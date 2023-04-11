import React ,{useState ,useEffect }from 'react'
import { Col, Row,Image,ListGroup, ListGroupItem  } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import {getallProducts} from'./service'

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  const name = useParams().name;
  useEffect(() => {
    
    getallProducts().then((res) => {
      setProducts(res.data)
  })
  .catch((err) => {
      console.error('Error:', err);
      
  });
  },[])
  
  return (
    <>
    {console.log(products)}
    { products.map((product)=>(
      
      product.name === name &&
   <Row key={product.name}>
   <Col md={4}>
    
    <Image  src={"/assets/image/"+product.img}  alt={product.name} fluid /> 
   </Col>
   <Col md={4}>
   <ListGroup variant='flush' >
          <ListGroupItem>
            <h2>{product.name}</h2>
          </ListGroupItem>
          <ListGroupItem>
          {product.quantity}
          </ListGroupItem>
          <ListGroupItem>
          {product.description}
          </ListGroupItem>
          </ListGroup>
   </Col>
   </Row>  
))}
     </>
  )
}

export default ProductDetails