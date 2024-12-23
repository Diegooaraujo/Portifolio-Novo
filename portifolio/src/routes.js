import {  BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './routes/Home';
import Projetos from './routes/Projetos';
import Cursos from './routes/Cursos';
import Error from './routes/Error';

import React from 'react'


export default function RoutesApp() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/cursos" element={<Cursos />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
  )
}
