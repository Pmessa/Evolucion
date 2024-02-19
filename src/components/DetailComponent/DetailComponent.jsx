import React from 'react';
import './DetailComponent.css'  
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DetailComponent = ({ DetalleProducto }) => {

  const Navigate = useNavigate()
  // const [stock, setStock] = React.useState(10)
  // console.log(stock)


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
        </div>
        <div className="desctiptionContainer">
          <h2>{DetalleProducto.description}</h2>
        </div>
      </section>
      
        <div className="detalleInfoProducto">
           <h3 className="detalleInfoTitle">Porqué aprovechar {DetalleProducto.title}</h3>
           <p>{DetalleProducto.nutricion}</p>
        </div>
        <Link to="/cart/itemId"><button className="btn-success">Comprar ebook de {DetalleProducto.category}</button></Link>
        <div className='buttonContainer'>
                <button onClick={() => Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</button>
              </div>
    </div>
  )
}
export default DetailComponent