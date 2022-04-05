import React, {useState} from 'react'
import Product from '../Product'
import './index.css'

export default function ProductsFather() {

  const [prods, setProds] = useState([{}])

  return (
      <>
      <h1 className='title-prods'>Produtos</h1>
    <div className='products-father'>
      
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
    </>
  )
}
