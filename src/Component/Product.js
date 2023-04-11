import React, { useState } from 'react'
import { Col,Card, Button} from "react-bootstrap";
import { NavLink,useNavigate } from "react-router-dom";
import {deleteProduct} from './service'

import "./style.css"



const Product = ({p, setShow}) => {
 const  [like,setLike]= useState(()=>{ return p.like})
const navigate = useNavigate()
 
 const handleevent = ()=>{
   p.quantity-=1
  setShow(true)
 }
 const handle = (p)=>{
   deleteProduct(p.id)
   navigate('/')
 }
 
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <>
    

    <Col md={4} >
    
    <Card style={{ width: '18rem' }} className={ p.like > 5 && "bestProduct"}>
    
    <Card.Img variant="top" src={'assets\\image\\'+p.img} />
    
    <Card.Body>
      <Card.Title  ><NavLink
            to={`/product/${p.name}`}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            {p.name}
          </NavLink></Card.Title>
      <Card.Text>
      {p.quantity} Piece
      </Card.Text>
      <h3 >{p.prix} DT</h3>
      
      <h3>Like: {like}</h3>
      <div  style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button onClick={()=>setLike(prevCount => like + 1)} disabled = {like-p.like>0} variant='primary'  >Like</Button>
      <Button onClick={handleevent} variant='info' disabled={p.quantity === 0} >Buy</Button>
      <Button  variant='info' >Delete</Button>

      {}
      <Button variant='info'><NavLink
            to={`/updateproduct/${p.id}`}
            
          >update
          </NavLink></Button>

      
      

      
      </div>
      
    </Card.Body>
  </Card>
  </Col>

  </>

  )
}

export default Product