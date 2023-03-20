import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Grid sx={{ backgroundColor: 'primary.main', minHeight: '100vh', pt: 1 }} >
            <Outlet />
        </Grid>
    )
}

export default Layout