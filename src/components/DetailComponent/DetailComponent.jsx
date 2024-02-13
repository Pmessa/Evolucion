import React from 'react';
import './DetailComponent.css'



const DetailComponent = ({ DetalleProducto }) => {

  const [stock, setStock] = React.useState(10)
  console.log(stock)


  return (
    <div className='DetailContainer' key={DetalleProducto.id}>
      <div className="detailTitleContainer">
        <h1>{DetalleProducto.title}</h1>
      </div>
      <section className='detailContainerInner'>
        <div className="sellContainer">
          <div className="imgHomeContainer">
            <img src={DetalleProducto.img01} alt="Imagen del producto" />
          </div>
          {/* <div className="itemCount">
         
            {stock > 5 ? <strong>Producto Disponible</strong> : <strong>Ultimas unidades!</strong>}
            <button className="btn-success" onClick={() => setStock(stock - 1)}>Agregar al Carrito</button>

            <div className="priceContainer">
            <p className='$'><span>$</span></p>{DetalleProducto.price}
            </div>
          </div> */}
        </div>
        <div className="desctiptionContainer">
          <h2>{DetalleProducto.description}</h2>
        </div>
      </section>
      
        <div className="detalleInfoProducto">
           <h3 className="detalleInfoTitle">Porqué aprovechar {DetalleProducto.title}</h3>
           <p>{DetalleProducto.nutricion}</p>
        </div>
    </div>
  )
}
export default DetailComponent