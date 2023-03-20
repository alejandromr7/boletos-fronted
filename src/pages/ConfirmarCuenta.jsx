import { Card, Container, Grid, Typography, Link } from '@mui/material';
import { useState, useEffect } from 'react'
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const ConfirmarCuenta = () => {


    const params = useParams();
    const { id } = params;

    const [alerta, setAlerta] = useState({});
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const { data } = await clienteAxios(`/usuarios/confirmar/${id}`);
                setAlerta(data);

                setCuentaConfirmada(true);
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }

        confirmarCuenta();
    }, []);


    const { msg } = alerta;

    return (
        <Container fixed={true} maxWidth="sm" >

            <Card sx={{
                padding: {
                    xs: 2,
                    md: 4
                }, mt: 11
            }}>
                <Typography variant='h5' sx={{ color: 'primary.main', mb: 2, mt: 2, textAlign: 'center', fontWeight: 'bold', fontSize: 40 }} >  Confirma tu cuenta y administra tus boletos</Typography>


            </Card>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>

                </Grid>
                {msg && <Alerta alerta={alerta} />}


                {cuentaConfirmada &&
                    (<Link component={RouterLink} color='inherit' to="/" sx={{ textDecoration: 'none' }}>
                        Iniciar sesión
                    </Link>
                    )
                }

            </Grid>

        </Container>

    )
}

export default ConfirmarCuenta