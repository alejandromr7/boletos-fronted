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



const Boletos = () => {

    const { boletos } = useBoletos();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {
                    boletos.map(boleto => (
                        boleto.disponible ?
                            (
                                <Grid key={boleto.no} item xs={3 / 2}>
                                    <Link component={LinkRouter} to={`/admin/editar-boleto/${boleto.no}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Item sx={{ bgcolor: '#00c853', color: 'white', fontWeight: 'black' }}>
                                            {boleto.no}
                                        </Item>
                                    </Link>
                                </Grid>
                            ) :
                            (
                                <Grid key={boleto.no} item xs={3 / 2}>
                                    <Link
                                        component={LinkRouter}
                                        to={`/admin/editar-boleto/${boleto.no}`}
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

export default Boletos