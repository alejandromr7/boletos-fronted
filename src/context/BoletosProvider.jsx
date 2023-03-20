import { useState, useEffect, createContext } from 'react';


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
    const [alertClasses, setAlerta] = useState({});
    const [consulta, setConsulta] = useState(true);

    useEffect(() => {
        const obtenerBoletos = async () => {
            const boletos = await fetch('http://192.168.0.12:4000/api/boletos');
            const data = await boletos.json();
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