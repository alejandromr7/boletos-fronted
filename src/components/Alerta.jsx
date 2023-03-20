import { Alert, AlertTitle, Grid } from '@mui/material'
import React from 'react'

const Alerta = ({ alerta }) => {
    console.log(alerta.error)
    return (
        <Grid item xs={12} sx={{ mb: 2 }}>

            <Alert variant="standard" severity={alerta.error ? 'error' : 'success'}>
                <AlertTitle>{alerta.error ? 'Error' : 'Success'}</AlertTitle>
                {alerta.msg}!
            </Alert>
        </Grid>
    )
}

export default Alerta