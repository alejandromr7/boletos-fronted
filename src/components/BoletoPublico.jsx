import { useEffect } from 'react'
import { Button, Container, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography, Card } from '@mui/material'
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom'
import useBoletos from '../hooks/useBoletos';
import clienteAxios from '../config/axios';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const BoletoPublico = () => {

    const navigate = useNavigate();
    const { no } = useParams();

    const { boleto, setBoleto, setConsulta } = useBoletos();

    const onChange = e => {
        setBoleto({
            ...boleto,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const obtenerBoleto = async () => {

            try {
                const { data } = await clienteAxios(`/boletos/${no}`);
                setBoleto(data);
                console.log(boleto);

                return
            } catch (error) {
                console.log(error);
            }
        }

        obtenerBoleto();
    }, [])



    const handleSubmit = async e => {
        e.preventDefault();

        let { nombre, pagado, disponible } = boleto;

        pagado = false;
        disponible = false;

        if (nombre == null || nombre.length < 8) {
            return window.alert('Ingresa tu nombre completo')
        }

        try {
            const { data } = await clienteAxios.put(`/boletos/${id}`, { nombre, pagado, disponible });
            console.log(data);
            setConsulta(true);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container sx={{ mt: 1 }} fixed>

            <Card sx={{ padding: 5, mt: 11 }}>

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
                                value={boleto.nombre === null ? '' : boleto.nombre}
                                onChange={onChange}
                            />
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
                            <Link component={RouterLink} color='inherit' to="/">
                                Ir a todos los boletos
                            </Link>
                        </Grid>


                    </Grid>
                </form>

            </Card>
        </Container>
    )
}
export default BoletoPublico