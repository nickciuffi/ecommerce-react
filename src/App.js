import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Routes from './Routes';
import CarItensProvider from './context/caritens';

export default function App() {


  return (
    <CarItensProvider>
    <Routes/>
    </CarItensProvider>
    
    );
}
