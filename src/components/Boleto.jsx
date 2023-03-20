import { useState, useEffect } from 'react'
import { Autocomplete, Button, Container, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom'
import useBoletos from '../hooks/useBoletos';
import clienteAxios from '../config/axios';


const Boleto = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { boleto, setBoleto, boletos, setConsulta } = useBoletos();

    const onChange = e => {
        setBoleto({
            ...boleto,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        const obtenerBoleto = async () => {
            const { data } = await clienteAxios(`http://192.168.0.12:4000/api/boletos/${id}`);
            //setBoleto(data);
            console.log(data);

            return;

            setBoleto(data);

            if (!boleto) return

            console.log(boleto.disponible);

            if (boleto.disponible) {
                console.log('Disponible');
                return
            } else {
                console.log('Vendido');
                setNombre(data.nombre);
                setPagado(data.pagado);
                setDisponible(data.disponible)
            }

        }

        obtenerBoleto();
    }, [])



    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, pagado].includes('')) {
            return window.alert('Todos los campos son obligatorios')
        }


        try {
            const boletos = await fetch(`http://192.168.0.12:4000/api/boletos/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, estatus: true, pagado })
            });
            await boletos.json();
            setConsulta(true);
            navigate('/admin')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container sx={{ mt: 1 }} fixed>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <Typography sx={{ fontSize: 30 }} >No. de boleto: {id}</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <TextField
                            name='nombre'
                            variant='outlined'
                            label='Nombre completo'
                            placeholder='nombre completo'
                            fullWidth
                            value={boleto.nombre}
                            onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <InputLabel id="demo-simple-select-label">Estatus del pago</InputLabel>
                        <Select
                            name='pagado'
                            fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Pago"
                            value={boleto.nombre}
                            onChange={onChange}
                        >
                            <MenuItem value={true}>Pagado</MenuItem>
                            <MenuItem value={false}>Pendiente</MenuItem>
                        </Select>
                    </Grid>
                </Grid>


                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <Button type='submit' variant='contained' color='primary' fullWidth>
                            Separar boleto
                        </Button>
                    </Grid>

                    <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
                        <Link component={RouterLink} color='inherit' to="/admin">
                            Ir a todos los boletos
                        </Link>
                    </Grid>


                </Grid>
            </form>

        </Container>
    )
}

export default Boleto
