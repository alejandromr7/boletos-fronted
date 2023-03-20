import { useState, useEffect } from 'react';

import { Button, Grid, Typography, TextField, Link, CardHeader } from '@mui/material'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowTable from './RowTable';
import clienteAxios from '../config/axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0d47a1',
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



const Tabla = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            const { data } = await clienteAxios('usuarios');
            setUsuarios(data);
        }
        obtenerUsuarios();
    }, [])

    return (
        <Paper className="container">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell>Nombre Completo</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Progreso</StyledTableCell>
                        <StyledTableCell>Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usuarios.map(usuario => (
                        <RowTable key={usuario.id} usuario={usuario} />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Tabla