import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import GraficaLineal from '../components/GraficaLineal';

const DashBorad = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Card sx={{ padding: 2, background: "#00142C" }} >
                    <GraficaLineal />
                </Card>
            </Grid>
        </Grid>
    )
}

export default DashBorad