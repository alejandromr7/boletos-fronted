import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

const ToastAlert = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp />
        </SnackbarProvider>
    )
}

export default ToastAlert