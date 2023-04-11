import React,{useEffect,useState} from 'react'
import {editProduct,getallProducts} from './service'
import { useParams ,useNavigate} from 'react-router-dom'


const UpdateProduct = () => {
    const namee = useParams().name;
    const navigate =useNavigate()
    const [products, setProducts] = useState([]);
    const [ name , setName]=useState('')
    const [ price , setPrice]=useState('')
    const [ quantity , setQuantity]=useState(0)
    const [ like , setLike]=useState(0)
    const [ description , setDescription]=useState('')
    const [ img , setImg]=useState('')
      const onSubmit = (e) => {
        e.preventDefault()
        editProduct(namee,{name:name,price:price,quantity:quantity,like:like,description:description,img:img})
        navigate('/')

      }
      console.log(namee)
    useEffect(() => {

        getallProducts(namee).then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.error('Error:', err);
            
        });
    },[namee])
  return (
    <>
    {console.log(products)}
    <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder={products.name}
              onChange={(e)=> setName(e.target.value)}
            />
            </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='price'
              name='price'
              value={price}
              placeholder={products.price}
              onChange={(e)=> setPrice(e.target.value)}
            />
            </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              value={description}
              placeholder={products.description}
              onChange={(e)=> setDescription(e.target.value)}
            />
            </div>
          <div className='form-group'>
            <input
              type='file'
              className='form-control'
              id='img'
              name='img'
              value={img}
              placeholder={products.img}
              onChange={(e)=> setImg(e.target.value)}
            />
            </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='like'
              name='like'
              value={like}
              placeholder={products.like}
              onChange={(e)=> setLike(e.target.value)}
            />
            </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='quantity'
              name='quantity'
              value={quantity}
              placeholder={products.quantity}
              onChange={(e)=> setQuantity(e.target.value)}
            />
            </div>
            <button type='submit' className='btn btn-dark'>
              Submit
            </button>
    </form>
    </>
  )
}

export default UpdateProduct