import React, {useState} from 'react'
import { Container, Navbar, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import {useCarItens} from '../../context/caritens'
import CarItem from '../CarItem'

export default function () {

  const {carItens} = useCarItens()
  const [numRefresh, refresh] = useState(0);

  return (
      <Navbar sticky="top" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand variant='dark'><Link to="/">Nick Songs</Link></Navbar.Brand>
          <div className='items'>
           <Link className='nav-link' to="/">Home</Link>
           <Link className='nav-link' to="/products">Products</Link>

             <NavDropdown title="Carrinho" id="navbarScrollingDropdown" disabled={carItens.length==0}>
              {carItens.map((item, index) =>{
             
               return(<CarItem refresh={refresh} name={item.name} qtd={item.qtd} key={index} id={item.key} />
                      
              )})}
             </NavDropdown>
        </div>
    </Container>
    
      </Navbar>

  );
}
