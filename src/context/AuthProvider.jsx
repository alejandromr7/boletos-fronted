import { useState, useEffect, createContext } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log('Direccionando');
    };

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                return setCargando(false);
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/usuarios/perfil', config);
                setAuth(data);
                //navigate('/admin');
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            } finally {
                setCargando(false);
            }
        }
        autenticarUsuario();
    }, []);




    return (
        <AuthContext.Provider value={{ auth, cargando, setAuth, selectedIndex, setSelectedIndex, handleListItemClick }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext;

