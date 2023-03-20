import * as React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

const Cargando = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: 50, marginTop: 15 }}>
            <CircularProgress color='primary' variant="indeterminate" size={400} thickness={0.7} />
        </Box>
    )
}

export default Cargando