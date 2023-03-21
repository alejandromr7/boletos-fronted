import { useEffect } from 'react'
import { Button, Container, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom'
import useBoletos from '../hooks/useBoletos';
import clienteAxios from '../config/axios';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const EditarBoleto = () => {

    const navigate = useNavigate();
    const { no } = useParams();

    console.log(no);

    const { boleto, setBoleto, setConsulta } = useBoletos();

    const { nombre, pagado, disponible } = boleto;

    const onChange = e => {
        setBoleto({
            ...boleto,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const obtenerBoleto = async () => {
            const { data } = await clienteAxios(`/boletos/${no}`);
            console.log(data);
            setBoleto(data);

        }

        obtenerBoleto();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();

        const { nombre, pagado, disponible } = boleto;

        if ([nombre, pagado, disponible].includes('')) {
            return window.alert('Todos los campos son obligatorios')
        }

        try {
            const { data } = await clienteAxios.put(`/boletos/${no}`, { nombre, pagado, disponible });
            console.log(data);
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
                        <Typography sx={{ fontSize: 30 }} >No. de boleto: {no}</Typography>
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
                            value={nombre === null ? '' : nombre}
                            onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <InputLabel id="demo-simple-select-label">Estatus:</InputLabel>
                        <Select
                            name='disponible'
                            fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Pago"
                            value={boleto.disponible}
                            onChange={onChange}
                        >
                            <MenuItem value={true}>Disponible</MenuItem>
                            <MenuItem value={false}>Vendido</MenuItem>
                        </Select>
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
                            value={pagado}
                            onChange={onChange}
                        >
                            <MenuItem value={true}>Pagado</MenuItem>
                            <MenuItem value={false}>Pendiente</MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} md={6} >
                        <Button type='submit' variant='contained' color='primary' fullWidth>
                            <ConfirmationNumberIcon />
                            <Typography sx={{ ml: 2 }}>Reservar Boleto</Typography>
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

export default EditarBoleto