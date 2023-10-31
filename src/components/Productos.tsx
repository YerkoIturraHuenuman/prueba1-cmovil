import { Root, Root2, Producto } from "../interfaces/products.interface";

export function Productos(props: Producto) {
  return (
    <div className="">
      <h2>Lista de Productos</h2>
      {props.data.map((producto: Root2, index: number) => (
        <div key={index}>
          <h3>{producto.title}</h3>
          <h4>{producto.price}</h4>
        </div>
      ))}
    </div>
  );
}
