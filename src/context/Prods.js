import React, { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import img1 from '../img/prod1.jpg'
import img2 from '../img/prod2.jpg'
import img3 from '../img/prod3.jpg'
import img4 from '../img/prod4.jpg'
import img5 from '../img/prod5.jpg'

const ProdsContext = createContext();

export default function ProdsProvider({ children }){

    const [prods, setProds] = useState([
        {
            key:uuidv4(),
            name:"Violão", 
            desc:"Um ótimo instrumento com cordas resistentes.", 
            price:500, 
            pic:img1
          }, 
          {
            key:uuidv4(), 
            name:"Gaita", 
            desc:"Um pequeno, porém ótimo instrumeto para tocar o que quiser.", 
            price:150, 
            pic:img2
          }, 
          {
            key:uuidv4(), 
            name:"Baixo", 
            desc:"Um magnífico baixo para tocar igual o cara do Red Hot.", 
            price:700, 
            pic:img3
          }, 
          {
            key:uuidv4(), 
            name:"Bateria", 
            desc:"Uma bela bateria que pode acabar com o sossego dos seus vizinhos.", 
            price:1500, 
            pic:img4
          }, 
          {
            key:uuidv4(), 
            name:"Ukulele", 
            desc:"Um fofo instrumento para tocar músicas fofas", 
            price:200, 
            pic:img5
          }
    ]);

    return(
        <ProdsContext.Provider value={{prods, setProds}}>{children}</ProdsContext.Provider>
    );
 }

 export function useProds(){
     const context = useContext(ProdsContext)
     const { prods, setProds } = context;
     return {prods, setProds}
 }