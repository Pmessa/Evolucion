import React from 'react'
import { ListGroup } from 'react-bootstrap'
import "./CartComponent.css"


const CartComponent = ({ CartProduct }) => {

    console.log(CartProduct)
    return (
        <div>
            <div className='CartComponent' key={CartProduct.id}>

                <h1>{CartProduct.title}Carrito Título</h1>

                <div className='CardContainer'>
                    <div className='ImgContainer'>
                        <img src={CartProduct.img01} alt="Imagen del producto en el carrito" />
                    </div>
                    <ListGroup>
                        <ListGroup.Item><h2>{CartProduct.description}</h2></ListGroup.Item>
                        <ListGroup.Item>{CartProduct.detail}</ListGroup.Item>
                        <ListGroup.Item><p className='$'><span>$</span></p>{CartProduct.price}</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </div>
                {/* <ItemCount />
                {stock > 5 ? <strong>Producto Disponible</strong> : <strong>Ultimas unidades!</strong>}
                <button className="btn-success btn" onClick={() => setStock(stock - 1)}>Comprar</button> */}
            </div>
        </div>
    )
}

export default CartComponent;
