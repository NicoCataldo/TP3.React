import { useState, useEffect } from 'react'
import Instrumento from"../../Entidades/Instrumento";
import {getInstrumentosJson} from "../../Servicios/FuncionesApi";
import ItemInstrumento from './ItemInstrumento';


function App() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
  const getInstrumentos = () => {
      let datos:Instrumento[] = getInstrumentosJson();
      setInstrumentos(datos);
  }

  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <>
      <div className="row">
         {instrumentos.map((instru:Instrumento) => 
                <ItemInstrumento key={instru.id} id={instru.id} instrumento={instru.instrumento} marca={instru.marca} modelo={instru.modelo} imagen={instru.imagen} precio={instru.precio} costoEnvio={instru.costoEnvio} cantidadVendida={instru.cantidadVendida} descripcion={instru.descripcion}></ItemInstrumento>
               )}
        </div>
    </>
  )
}

export default App
