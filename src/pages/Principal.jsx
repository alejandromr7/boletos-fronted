import { Button, Grid, Typography, TextField, Link, CardHeader } from '@mui/material'
import Card from '@mui/material/Card';
import Tabla from '../components/Tabla';
import Boletos from './Boletos';

const Principal = () => {
    return (
        <Grid container spacing={2}>
            <Boletos />
        </Grid>
    )
}

export default Principal
{/* <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold', textAlign: 'center' }} >Welcome to Jamaica!</Typography> */ }
        // <Container fixed={true} maxWidth="lg" >


        //     <Card sx={{ padding: 2, background: "#00142C", minWidth: { xs: '100%', lg: 100 }, mx: 5, mt: { sm: 5 } }} >
        //         <GraficaLineal />
        //     </Card>

        // </Container>