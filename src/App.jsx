import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Boleto from './components/Boleto'
import BoletoInfo from './components/BoletoInfo'
import BoletoPublico from './components/BoletoPublico'
import EditarBoleto from './components/EditarBoleto'
import { AuthProvider } from './context/AuthProvider'
import { BoletosProvider } from './context/BoletosProvider'
import Layout from './layouts/Layout'
import RutaProtegida from './layouts/RutaProtegida'
import IniciarSesion from './pages/auth/IniciarSesion'
import NuevoUsuario from './pages/auth/NuevoUsuario'
import BoletosPublicos from './pages/BoletosPublicos'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import DashBorad from './pages/DashBorad'
import PerfilUsuario from './pages/PerfilUsuario'
import Principal from './pages/Principal'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BoletosProvider>

          <Routes>

            <Route path='/' element={<Layout />}>
              <Route index element={<BoletosPublicos />} />
              <Route path='login' element={<IniciarSesion />} />
              <Route path='reservar-boleto/:no' element={<BoletoPublico />} />
              <Route path='privado/crear-cuenta' element={<NuevoUsuario />} />
              <Route path='confirmar/:no' element={<ConfirmarCuenta />} />
            </Route>

            <Route path='/admin' element={<RutaProtegida />} >
              <Route index element={<Principal />} />
              <Route path='ver-boleto/:no' element={<BoletoInfo />} />
              <Route path='editar-boleto/:no' element={<EditarBoleto />} />
              <Route path='perfil' element={<PerfilUsuario />} />
              <Route path='dashboard' element={<DashBorad />} />
            </Route>
          </Routes>

        </BoletosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App