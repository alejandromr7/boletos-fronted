import { useContext } from 'react';
import BoletosContext from '../context/BoletosProvider';


const useBoletos = () => useContext(BoletosContext);


export default useBoletos;