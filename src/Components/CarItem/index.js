import { Button } from 'react-bootstrap'
import React, {useState} from 'react'
import './index.css'
import { useCarItens } from '../../context/caritens'

export default function CarItem({ name, qtd, id, refresh }) {

  const {carItens, setCarItens} = useCarItens()
  

  function increaseAmount(){
    let newItens = carItens.slice()
    let itemChange = newItens.find(item => item.key === id)
    itemChange.qtd = itemChange.qtd + 1
    refresh(newItens)
  }

  function decreaseAmount(){
    let newItens = carItens.slice()
    let itemChange = newItens.find(item => item.key === id)
    if(itemChange.qtd==1){ 
      removeItem()
      return
    }
    itemChange.qtd = itemChange.qtd - 1
    refresh(newItens)
  }

  function removeItem(){
    let newItens = carItens.filter(item => item.key !== id)
    setCarItens(newItens)
  }

  return (
    <>
    <div className='item-cont'>
      {name}
      <div className='buttons-car-item'> 
    <Button size="sm" variant='danger' onClick={decreaseAmount}>-</Button>
     x{qtd} 
     <Button size="sm" variant='success' onClick={increaseAmount}>+</Button>
     </div>
     </div>
     <hr />
    
     
    </>
  )
}
