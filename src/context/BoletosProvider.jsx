import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';


const BoletosContext = createContext();
const BoletosProvider = ({ children }) => {


    const [boletos, setBoletos] = useState([]);
    const [boleto, setBoleto] = useState({
        id: '',
        no: '',
        nombre: '',
        disponible: false,
        pagado: false,
        fecha: '',
    });

    const [consulta, setConsulta] = useState(true);

    useEffect(() => {
        const obtenerBoletos = async () => {
            const { data } = await clienteAxios('/boletos');
            setBoletos(data);
        }

        if (consulta) {
            obtenerBoletos();
            setConsulta(false);
        }

    }, [consulta])




    return (
        <BoletosContext.Provider value={{ boletos, boleto, setBoletos, setBoleto, setConsulta }}>
            {children}
        </BoletosContext.Provider>
    )
}


export { BoletosProvider }
export default BoletosContext;