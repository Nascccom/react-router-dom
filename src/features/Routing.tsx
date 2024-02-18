import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Adidas, adidasArr} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Error404} from "../components/pages/Error404";
import {Model} from "../features/Model";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR404: '/error404'
} as const

export const Routing = () => {
    return (
      <Routes>
          <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>

          <Route path={PATH.ADIDAS} element={<Adidas/>}/>
          <Route path={PATH.ADIDAS} element={<Adidas/>}/>
          <Route path={PATH.PUMA} element={<Puma/>}/>
          <Route path={PATH.ABIBAS} element={<Abibas/>}/>
          <Route path={`${PATH.ADIDAS}/:modelId`} element={<Model data={adidasArr}/>}/>

          <Route path={PATH.ERROR404} element={<Error404/>}/>
          <Route path='/*' element={<Navigate to={PATH.ERROR404}/>}/>
      </Routes>
    );
};

export default Routing;