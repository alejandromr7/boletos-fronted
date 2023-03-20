import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Cargando from '../components/Cargando';
import useAuth from '../hooks/useAuth';
import LayoutDrawer from './LayoutDrawer'

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    if (cargando) return <Cargando />

    return (
        <>
            {auth?.id ? <LayoutDrawer /> : <Navigate to='/' />}
        </>

    )
}

export default RutaProtegida