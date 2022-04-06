import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Routes from './Routes';
import CarItensProvider from './context/caritens';
import ProdsProvider from './context/Prods';

export default function App() {


  return (
    <ProdsProvider>
    <CarItensProvider>
    <Routes/>
    </CarItensProvider>
    </ProdsProvider>
    );
}
