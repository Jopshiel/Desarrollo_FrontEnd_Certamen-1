import React, { useState } from 'react'
import {
  Button, Card, CardActions, CardContent, CardHeader,
  FormControlLabel, MenuItem, Radio, RadioGroup,
  Select, Slider, TextField, Typography, Rating
} from '@mui/material'

function GuerrerosForm({ onCrearGuerrero = () => {} }) {

  const categorias = [
    { label: 'Capitán', value: 'capitan' },
    { label: 'Berserker', value: 'berserker' },
    { label: 'Explorador', value: 'explorador' },
    { label: 'Asediador', value: 'asediador' },
  ]

  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Orco')
  const [nivelCombate, setNivelCombate] = useState(1)
  const [categoria, setCategoria] = useState(categorias[0].value)
  const [amenaza, setAmenaza] = useState(1)

  const limpiarFormulario = () => {
    setNombre('')
    setTipo('Orco')
    setNivelCombate(1)
    setCategoria(categorias[0].value)
    setAmenaza(1)
  }

  const handleClick = () => {
    const guerrero = {}
    guerrero.nombre = nombre
    guerrero.tipo = tipo
    guerrero.nivelCombate = nivelCombate
    guerrero.categoria = categoria
    guerrero.amenaza = amenaza
    onCrearGuerrero(guerrero)
    limpiarFormulario()
  }

  return (
    <Card raised>
      <CardHeader title="Ingresar Guerrero" />
      <CardContent>

        {/* Nombre */}
        <div className="mt-3">
          <TextField
            label="Nombre del Guerrero"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            fullWidth
            id="nombre-guerrero"
          />
        </div>

        {/* Tipo de Guerrero - RadioGroup */}
        <div className="mt-3">
          <Typography variant="subtitle2">Tipo de Guerrero</Typography>
          <RadioGroup
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            row
          >
            <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
            <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
          </RadioGroup>
        </div>

        {/* Nivel de Combate - Slider */}
        <div className="mt-3">
          <Typography variant="subtitle2">Nivel de Combate: {nivelCombate}</Typography>
          <Slider
            value={nivelCombate}
            onChange={(e, val) => setNivelCombate(val)}
            min={1}
            max={100}
            step={1}
            valueLabelDisplay="auto"
          />
        </div>

        {/* Categoría - Select */}
        <div className="mt-3">
          <Typography variant="subtitle2">Categoría / Rango</Typography>
          <Select
            fullWidth
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            id="categoria-guerrero"
          >
            {categorias.map((c) =>
              <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
            )}
          </Select>
        </div>

        {/* Nivel de Amenaza - Rating */}
        <div className="mt-3">
          <Typography variant="subtitle2">Nivel de Amenaza / Furia</Typography>
          <Rating
            value={amenaza}
            onChange={(e, val) => setAmenaza(val)}
            min={1}
          />
        </div>

      </CardContent>
      <CardActions>
        <Button
          onClick={handleClick}
          fullWidth
          variant="outlined"
          color="secondary"
        >
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  )
}

export default GuerrerosForm
