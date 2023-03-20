import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link as LinkRouter } from 'react-router-dom'
import { Link, Typography } from '@mui/material';
import useBoletos from '../hooks/useBoletos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const BoletosPublicos = () => {

    const { boletos } = useBoletos();

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>

            <Typography variant='h5' sx={{ color: 'white', mb: 2, mt: 0, textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Reserva Tú Boleto</Typography>

            <Grid container spacing={1}>
                {
                    boletos.map(boleto => (
                        boleto.disponible ?
                            (
                                <Grid key={boleto.no} item xs={3 / 2}>
                                    <Link component={LinkRouter} to={`/reservar-boleto/${boleto.no}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Item sx={{ bgcolor: '#00c853', color: 'white', fontWeight: 'black' }}>
                                            {boleto.no}
                                        </Item>
                                    </Link>
                                </Grid>
                            ) :
                            (
                                <Grid key={boleto.no} item xs={3 / 2}>
                                    <Link
                                        onClick={() => { window.alert('Ya esta reservado este boleto') }}
                                        component={LinkRouter}
                                        to=''
                                        sx={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <Item sx={{ bgcolor: '#f50057', color: 'white', fontWeight: 'black' }}>
                                            {boleto.no}
                                        </Item>
                                    </Link>
                                </Grid>
                            )
                    ))
                }
            </Grid>
        </Box >
    )
}

export default BoletosPublicos