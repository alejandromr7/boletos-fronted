import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Box, LinearProgress, Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: 15,
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.primary,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const RowTable = ({ usuario }) => {
    const progreso = 90;

    return (
        <StyledTableRow>
            <StyledTableCell>{usuario.id}</StyledTableCell>
            <StyledTableCell>{usuario.nombre}</StyledTableCell>
            <StyledTableCell>{usuario.email}</StyledTableCell>
            <StyledTableCell >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <LinearProgress variant="determinate" sx={{ maxWidth: 190 }} value={progreso} color={`${progreso <= 50 ? 'error' : 'secondary'}`} />
                    </Box>
                    <Box sx={{ width: '50%', textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ fontSize: 15, fontWeight: '500' }} color={`${progreso <= 50 ? 'error.main' : 'secondary.main'}`}>
                            {progreso}%
                        </Typography>
                    </Box>
                </Box>
            </StyledTableCell>
            <StyledTableCell>12</StyledTableCell>
        </StyledTableRow>
    )
}

export default RowTable