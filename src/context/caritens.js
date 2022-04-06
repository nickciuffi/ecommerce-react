import React, { createContext, useContext, useState } from "react";

const CarContext = createContext();

export default function CarItensProvider({ children }){

    const [carItens, setCarItens] = useState([]);

    return(
        <CarContext.Provider value={{carItens, setCarItens}}>{children}</CarContext.Provider>
    );
 }

 export function useCarItens(){
     const context = useContext(CarContext)
     const { carItens, setCarItens } = context;
     return {carItens, setCarItens}
 }