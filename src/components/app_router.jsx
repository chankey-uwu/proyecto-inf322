import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import ReservarQuincho from '../pages/reservar-quincho'
import RegistrarVisitas from '../pages/registrar-visitas'
import RegistrarPaquetes from '../pages/registrar-paquetes'
import CustodiaPaquetes from '../pages/custodia-paquetes'
import HistorialVisitas from '../pages/historial-visitas'
import CalendarioQuincho from '../pages/calendario-quincho'
import HomeConserje from '../pages/home-conserje'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/home-conserje' element={<HomeConserje />} />
        <Route path='/reservar-quincho' element={<ReservarQuincho />} />
        <Route path='/registrar-visitas' element={<RegistrarVisitas />} />
        <Route path='/registrar-paquetes' element={<RegistrarPaquetes/>} />
        <Route path='/custodia-paquetes' element={<CustodiaPaquetes />} />
        <Route path='/calendario-quincho' element={<CalendarioQuincho />} />
        <Route path='/historial-visitas' element={<HistorialVisitas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
