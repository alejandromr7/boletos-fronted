import { useState } from 'react'
import { Button, Grid, Typography, TextField, Link, Alert, AlertTitle } from '@mui/material'
import Card from '@mui/material/Card';
import { Container } from '@mui/system'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Alerta from '../../components/Alerta';
import clienteAxios from '../../config/axios';


const NuevoUsuario = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [alerta, setAlerta] = useState({});


    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, email, password, confirmar].includes('')) {
            return setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
        }

        if (password !== confirmar) {
            setAlerta({ msg: 'Las contraseñas no coinciden', error: true });
            return
        }

        if (password.length < 6) {
            setAlerta({ msg: 'Las contraseña debe ser mayor a 6 carácteres', error: true });
            return
        }

        setAlerta({ msg: 'USuario registrado correctamente', error: false })
        console.log({ nombre, email, password, confirmar });

        try {
            const { data } = await clienteAxios.post('usuarios', { nombre, email, password });
            console.log(data);
            setNombre('');
            setEmail('');
            setPassword('');
            setConfirmar('');
            navigate('/');

        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true });
        }

    }

    const { msg } = alerta;

    return (
        <Container fixed={true} maxWidth="sm" >

            <Card sx={{ padding: 5, mt: 11 }}>
                <Typography variant='h5' sx={{ color: 'primary.main', mb: 2, mt: 2, textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Crear Cuenta</Typography>

                <form onSubmit={handleSubmit}>

                    {msg && (
                        <Alerta alerta={alerta} />
                    )

                    }

                    <Grid container spacing={2} justifyContent="center" >
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type='text'
                                variant='outlined'
                                label='Nombre Completo'
                                placeholder='Juan Alvarado'
                                fullWidth
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='email'
                                variant='outlined'
                                label='Email'
                                placeholder='email@google.com'
                                fullWidth
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='password'
                                variant='outlined'
                                label='Contraseña'
                                placeholder='*******'
                                fullWidth
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='password'
                                variant='outlined'
                                label='Confirmar Contraseña'
                                placeholder='*******'
                                fullWidth
                                value={confirmar}
                                onChange={e => setConfirmar(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ textAlign: 'end', mt: 1 }}>
                            <Button
                                variant='contained'
                                type='submit'
                                sx={{ width: 250, borderRadius: 1, height: 40, textAlign: 'center' }}
                            >
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
                        <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
                            <Link component={RouterLink} color='inherit' to="/" sx={{ textDecoration: 'none' }}>
                                Ya tienes Cuenta?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Card>


        </Container>
    )
}

export default NuevoUsuario


