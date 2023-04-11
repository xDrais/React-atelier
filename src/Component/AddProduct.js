import React ,{useState ,useEffect }from 'react'
import {addProduct} from './service'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {
    const navigate =useNavigate()
    const [products, setProducts] = useState({
    id:0,
    name: "",
    price: "",
    img: "",
    like:0,
    quantity:0,
    description: ""
    });
    const {id,name,price,description,img,like,quantity}=products
    const onChange = (e) => {
        setProducts((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
      const onSubmit = (e) => {
        e.preventDefault()
         const products = {
            id,
            name,
            price,
            description,
            img,
            like,
            quantity,
        }
        addProduct(products);
        navigate('/')
      }
    
  return (
   <>
   <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
            </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='price'
              name='price'
              value={price}
              placeholder='Enter your price'
              onChange={onChange}
            />
            </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              value={description}
              placeholder='Enter your description'
              onChange={onChange}
            />
            </div>
          <div className='form-group'>
            <input
              type='file'
              className='form-control'
              id='img'
              name='img'
              value={img}
              placeholder='Enter your img'
              onChange={onChange}
            />
            </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='like'
              name='like'
              value={like}
              placeholder='Enter your like'
              onChange={onChange}
            />
            </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='quantity'
              name='quantity'
              value={quantity}
              placeholder='Enter your quantity'
              onChange={onChange}
            />
            </div>
            <button type='submit' className='btn btn-dark'>
              Submit
            </button>
    </form>
   </>
  )
}

export default AddProduct