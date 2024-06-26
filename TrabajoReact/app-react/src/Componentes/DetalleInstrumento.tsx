import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { useParams } from "react-router-dom";
import { getOneInstrumento } from "../../Servicios/FuncionesApi";
import Instrumento from "../../Entidades/Instrumento";
import "./styles.css";

export const DetalleInstrumento = () => {
  const { idinstrumento } = useParams();
  const [Instru, setInstrumento] = useState<Instrumento>();
  const getInstrumento = async () => {
    const instrumentoSelect: Instrumento = await getOneInstrumento(
      Number(idinstrumento)
    );
    setInstrumento(instrumentoSelect);
  };
  useEffect(() => {
    getInstrumento();
  }, []);

  const text =
    Instru?.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${Instru?.costoEnvio}`;
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`../imagenes/${Instru?.imagen}`}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{Instru?.instrumento}</h5>
                  <h6 className="card-title">${Instru?.precio}</h6>
                  <p className="card-text">
                    <b>Descripcion: </b>
                    {Instru?.descripcion}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">{text}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {Instru?.cantidadVendida} vendidos
                    </small>
                  </p>
                  <a className="btn btn-primary">Agregar al carrito</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetalleInstrumento;
