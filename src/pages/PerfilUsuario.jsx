import { useState } from 'react';
import { Box, Button, Grid, Typography, TextField, Link, FormControlLabel, Stack, LinearProgress } from '@mui/material'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import useAuth from '../hooks/useAuth';
import { Label } from '@mui/icons-material';

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));

const PerfilUsuario = () => {
    const [progress, setProgress] = useState(60);
    const { auth } = useAuth();

    console.log(auth);

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ pl: 3 }}
        >

            <Typography color='primary' sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: { xs: 20, sm: 40 } }} >Administra Tú Perfil</Typography>

            <Grid container maxWidth='lg' justifyContent='center' spacing={4}
                sx={{ background: 'white', mt: 1, borderRadius: 1, py: 5, boxShadow: 1, pr: 4 }}

            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant='standard'
                        size='small'
                        color="primary"
                        type='text'
                        label="Id Usuario"
                        defaultValue={auth.id}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        variant='standard'
                        size='small'
                        color="primary"
                        type='text'
                        label="Nombre Completo"
                        defaultValue={auth.nombre}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        variant='standard'
                        size='small'
                        type='email'
                        label="Email"
                        defaultValue={auth.email}
                        color="primary"
                        focused
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        variant='standard'
                        size='small'
                        color="primary"
                        type='password'
                        label="Contraseña"
                        defaultValue={auth.email}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" sx={{ color: '#000', fontSize: 17 }}>
                            Progreso
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" value={progress} color={`${progress <= 50 ? 'error' : 'primary'}`} />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            <Typography variant="body2" sx={{ fontSize: 17, fontWeight: '500' }} color={`${progress <= 50 ? 'error.main' : 'primary.main'}`}>
                                {progress}%
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
                    <FormControlLabel
                        control={<Android12Switch defaultChecked />}
                        label="Activar /Desactivar mi cuenta"
                    />
                </Grid>

                <Grid item xs={12} sm={7} sx={{ textAlign: 'center' }}>
                    <Button variant='contained' type='submit' sx={{ width: 250, borderRadius: 1, height: 40, textAlign: 'center' }} fullWidth>Actualizar Perfil</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PerfilUsuario
