import React, { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const CarContext = createContext();

export default function CarItensProvider({ children }){

    const [carItens, setCarItens] = useState([{key:uuidv4(), name:"violão", qtd:2}, {key:uuidv4(), name:"Flauta", qtd:3},{key:uuidv4(), name:"Baixo", qtd:1}]);

    return(
        <CarContext.Provider value={{carItens, setCarItens}}>{children}</CarContext.Provider>
    );
 }

 export function useCarItens(){
     const context = useContext(CarContext)
     const { carItens, setCarItens } = context;
     return {carItens, setCarItens}
 }