import React, { useState } from 'react'
import GuerrerosForm from '../components/GuerrerosForm'
import GuerrerosView from '../components/GuerrerosView'

function GuerrerosContainer() {

  const [guerreros, setGuerreros] = useState([])

  const handleCrear = (guerrero) => {
    setGuerreros([...guerreros, guerrero])
  }

  const handleEliminar = (guerrero) => {
    const filtrada = guerreros.filter((g) => { return g?.nombre !== guerrero?.nombre })
    setGuerreros(filtrada)
  }

  return (
    <div className="container mt-3">
      {/* Formulario arriba */}
      <div className="row">
        <div className="col-12">
          <GuerrerosForm onCrearGuerrero={handleCrear} />
        </div>
      </div>

      {/* Tabla debajo */}
      <div className="row mt-3">
        <div className="col-12">
          <GuerrerosView guerreros={guerreros} onEliminar={handleEliminar} />
        </div>
      </div>
    </div>
  )
}

export default GuerrerosContainer
