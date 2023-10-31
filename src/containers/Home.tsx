import "../App.css";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products.service";
import { Root, Root2 } from "../interfaces/products.interface";
import { Productos } from "../components/Productos";
import { Carga } from "../components/Carga";
import { ErrorComp } from "../components/Error";
export const App = () => {
  //------------------------SET GENERALES--------------------------
  const [order, setOrder] = useState("desc");
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);
  //------------------------FUNCIONES PRINCIPALES--------------------------
  const [datos, setDatos] = useState<Root>([]);
  const getDatos = async () => {
    setCarga(true);

    try {
      const res = await getProducts();
      let productos = res.data;
      if (order === "desc")
        productos.sort((a: Root2, b: Root2) => a.price - b.price);
      else if (order === "asc")
        productos.sort((a: Root2, b: Root2) => b.price - a.price);
      setDatos(productos);
    } catch (error) {
      setError(true);
    } finally {
      setCarga(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, [, order]);
  //------------------------Procedimientos--------------------------
  //if (datos.length > 0)
  //console.log("Datos: ", datos);
  //console.log("carga: ", carga);
  //console.log("orden: ", order);
  if (!error)
    return (
      <div className="homePage">
        <div>
          <button
            onClick={() => {
              setOrder(order === "asc" ? "desc" : "asc");
            }}
            style={{ marginTop: "40px" }}
          >
            Cambiar Orden
          </button>
          {!carga ? <Productos data={datos}></Productos> : null}
        </div>
        {carga ? <Carga></Carga> : null}
      </div>
    );
  else return <ErrorComp></ErrorComp>;
};
