import { Button, Grid, Typography, TextField, Link, AlertTitle } from '@mui/material'
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { Container } from '@mui/system'
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import clienteAxios from '../../config/axios';
import useAuth from '../../hooks/useAuth';


const IniciarSesion = () => {

    const navigate = useNavigate();

    const { cargando, setAuth, auth } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/admin')
            return
        }
    }, [])


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if ([email, password].includes('')) {
            return setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
        }

        try {
            const { data } = await clienteAxios.post('usuarios/login', { email, password });
            setAuth(data);
            localStorage.setItem('token', data.token);
            navigate('/admin');
        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true });
        }
    }

    const { msg } = alerta;

    return (
        <Container fixed={true} maxWidth="sm" >

            <Card sx={{
                padding: {
                    xs: 2,
                    md: 4
                }, mt: 11
            }}>
                <Typography variant='h5' sx={{ color: 'primary.main', mb: 2, mt: 2, textAlign: 'center', fontWeight: 'bold', fontSize: 40 }} >Iniciar Sesión</Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center" >

                        {msg && (
                            <Grid item xs={12} sx={{ mb: 2 }}>

                                <Alert variant="standard" severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {msg}!
                                </Alert>
                            </Grid>
                        )

                        }

                        <Grid item xs={12} sx={{ mb: 1 }}>
                            <TextField
                                type='email'
                                variant='outlined'
                                label='Email'
                                placeholder='email@google.com'
                                fullWidth
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                type='password'
                                variant='outlined'
                                label='Contraseña'
                                placeholder='*******'
                                fullWidth
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ textAlign: 'end', mt: 2 }}>
                            <Button variant='contained' type='submit' sx={{ width: 150, borderRadius: 1, height: 40, textAlign: 'center' }}>Iniciar Sesión</Button>
                        </Grid>

                    </Grid>

                    {/* <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
                            <Link component={RouterLink} color='inherit' to="/crear-cuenta" sx={{ textDecoration: 'none' }}>
                                Aun no tienes Cuenta?  Crear Cuenta
                            </Link>
                        </Grid>
                    </Grid> */}
                </form>
            </Card>


        </Container>
    )
}

export default IniciarSesion


{/* <Grid item xs={12} sx={{ textAlign: 'end', mt: 2 }}>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                sx={{ borderRadius: 7, width: 200, height: 45, }}
                            >Iniciar Sesion</Button>
                        </Grid> */}