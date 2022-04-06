import React from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import {useProds} from '../../context/Prods'
import {useCarItens} from '../../context/caritens'

export default function Product({name, desc, price, pic, id}) {

  const {prods, setProds} = useProds()
  const {carItens, setCarItens} = useCarItens()

  function handleAddCart(click){
    if(isOnCart()) return
    let item = prods.filter(prod => prod.key === id)[0]
    let newCarItem = {
      key:item.key,
      name:item.name, 
      qtd:1
    }
    setCarItens([...carItens, newCarItem])
    
  }

  function isOnCart(){
    let newCarItens = carItens.slice()
    let itemOnCart = newCarItens.filter(item => item.key === id)[0]
    if(itemOnCart === undefined) return false
    itemOnCart.qtd++
    setCarItens(newCarItens)
    return true
    
  }

  return (
    <div className='prod-cont'>
        <img src={pic}></img>
        <div className='prod-info'>
        <div className='title-prod'>{name}</div>
        <div className='price-prod'>{price}</div>
        <div className='subtitle-prod'>{desc}</div>
        <Button variant='dark' onClick={handleAddCart}>+ carrinho</Button>
        </div>
    </div>
  )
}
