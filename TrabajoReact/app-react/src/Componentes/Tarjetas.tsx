import { useState, useEffect } from "react";
import Instrumento from "../../Entidades/Instrumento";
import { getAllInstrumentos } from "../../Servicios/FuncionesApi";
import ItemInstrumento from "./ItemInstrumento";

export const Tarjetas = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  {
    /*Nota: Primero correr Json server con npm run server*/
  }
  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  useEffect(() => {
    getInstrumentos();
  }, []);
  return (
    <>
      <div className="Instrumentos"></div>
      <div className="row">
        {instrumentos.map((instru: Instrumento) => (
          <ItemInstrumento
            key={instru.id}
            id={instru.id}
            instrumento={instru.instrumento}
            marca={instru.marca}
            modelo={instru.modelo}
            imagen={instru.imagen}
            precio={instru.precio}
            costoEnvio={instru.costoEnvio}
            cantidadVendida={instru.cantidadVendida}
            descripcion={instru.descripcion}
          ></ItemInstrumento>
        ))}
      </div>
    </>
  );
};
