import React from 'react'
import { Button } from 'react-bootstrap'
import pic from '../../img/prod1.jpg'
import './index.css'

export default function Product() {
  return (
    <div className='prod-cont'>
        <img src={pic}></img>
        <div className='prod-info'>
        <div className='title-prod'>Violao</div>
        <div className='subtitle-prod'>Violão com cordas de aço profissionais.</div>
        <Button variant='dark'>+ carrinho</Button>
        </div>
    </div>
  )
}
