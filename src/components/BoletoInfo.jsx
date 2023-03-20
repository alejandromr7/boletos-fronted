import { useState, useEffect } from 'react'
import { Link as LinkRouter, useParams } from 'react-router-dom';
import useBoletos from '../hooks/useBoletos';
import clienteAxios from '../config/axios';
import { Container, Grid, Link, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BoletoFisico from './BoletoFisico';

const BoletoInfo = () => {

    const { id } = useParams();

    const { boleto, setBoleto } = useBoletos();

    useEffect(() => {
        const obtenerBoleto = async () => {
            const { data } = await clienteAxios(`http://192.168.0.12:4000/api/boletos/${id}`);
            setBoleto(data);

        }

        obtenerBoleto();
    }, [])

    if (!boleto.id) return;

    console.log(bole);

    const { no, nombre, disponible, pagado } = boleto;

    return (
        <Container sx={{ mt: 1 }} fixed>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Typography sx={{ fontSize: 30, }} >No. de boleto: {no} </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Typography sx={{ fontSize: 30, }} > Cliente: {`${!nombre ? 'Aun no hay cliente para este boleto' : nombre}`} </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Typography sx={{ fontSize: 30, }} > Estatus: {`${disponible ? 'Disponible' : 'Vendido'}`} </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Typography sx={{ fontSize: 30, }} > Estatus de pago: {`${pagado ? 'Pagado' : 'Pendiente de pago'}`} </Typography>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' sx={{ mt: 5, fontSize: 30, }}>
                <Link component={LinkRouter} to={`/admin`} sx={{ textDecoration: 'none', color: 'blues' }}>
                    <ListItemButton >
                        <ListItemIcon>
                            <ConfirmationNumberIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Ir a boletos`} />
                    </ListItemButton>
                </Link>

                <Link component={LinkRouter} to={`/admin/editar-boleto/${boleto.no}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton >
                        <ListItemIcon>
                            <ConfirmationNumberIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Editar boleto`} />
                    </ListItemButton>
                </Link>

            </Grid>
        </Container>
    )
}

export default BoletoInfo