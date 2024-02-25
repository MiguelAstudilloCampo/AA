import { useState } from 'react'
import './App.css'
import Tabla from './Components/Tabla'
import Formulario from './Components/Formulario'

function App() {
  return (
    <div className='Container'>
      <Formulario></Formulario>
      <Tabla></Tabla>
    </div>
  )
}

export default App
