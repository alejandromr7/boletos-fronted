import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



const LayoutDrawer = () => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid sx={{ display: 'flex' }} minWidth='xl'>
            <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />

            <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />

            <Main open={open} sx={{ bgcolor: '#eeeeee', height: '100vh', px: 5 }}>

                <DrawerHeader />

                <Outlet />

            </Main>
        </Grid>
    )
}

export default LayoutDrawer