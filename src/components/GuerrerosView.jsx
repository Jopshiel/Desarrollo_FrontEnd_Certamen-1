import React from 'react'
import {
  Alert, Button, Card, CardContent, CardHeader,
  Chip, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@mui/material'

function GuerrerosView({ guerreros = [], onEliminar = null }) {

  if (!guerreros?.length) {
    return (
      <Card>
        <CardHeader title="Despliegue del Ejército" />
        <CardContent>
          <Alert severity="info">No hay guerreros en el ejército todavía.</Alert>
        </CardContent>
      </Card>
    )
  }

  const handleEliminar = (guerrero) => {
    onEliminar(guerrero)
  }

  return (
    <Card>
      <CardHeader title="Despliegue del Ejército" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Categoría / Rango</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Clasificación</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guerreros.map((g) =>
                <TableRow key={g.nombre}>
                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>{g.tipo}</TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivelCombate}</TableCell>
                  <TableCell>
                    <Chip
                      label={g.tipo}
                      color={g.tipo === 'Orco' ? 'warning' : 'error'}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleEliminar(g)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default GuerrerosView
