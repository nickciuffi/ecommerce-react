import React, {useState} from 'react'
import Product from '../Product'
import './index.css'
import { useProds } from '../../context/Prods'

export default function ProductsFather() {

const {prods} = useProds()
 

  return (
      <>
      <h1 className='title-prods'>Produtos</h1>
      <div className='products-father'>
      {prods.map(prod =>{
        return <Product key={prod.key} name={prod.name} desc={prod.desc} price={prod.price} pic={prod.pic} id={prod.key} />
      })}
        
        
    </div>
    </>
  )
}
