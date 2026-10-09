import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GuerrerosContainer from './containers/GuerrerosContainer'

// Functional Component
function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Anillo Único
          </Typography>
          <Typography variant="subtitle1">
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
      <GuerrerosContainer />
    </>
  )
}

export default App
