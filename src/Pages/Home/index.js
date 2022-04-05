import React, {useState, useContext} from 'react'
import Header from '../../Components/Header'
import {Button, Container} from 'react-bootstrap'
import { useCarItens} from '../../context/caritens'
import pic from "../../img/violao-louco.jpg"
import './index.css'
import {Link} from 'react-router-dom'
import {FaGuitar} from 'react-icons/fa';

export default function Home(){

  const {carItens, setCarItens} = useCarItens()

  function addToCar(){
    
  }
    return (
      <>
      <Header />
      <Container className='home'>
        <h1>Nick songs <FaGuitar /></h1>
        <h2>A maior loja de instrumentos do mundo!</h2>
        <img src={pic}></img>
        <p className='goto-prod'>Venha conhecer os nossos <Link to={"/products"}>produtos</Link></p>
      </Container>
   </>
    );
  }
  