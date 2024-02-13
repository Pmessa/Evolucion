import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./CarrouselComponent.css"

function CarrouselComponent() {
    return (
        <Carousel className='carrouselHome'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/mis-nutrientes-vegan-eaf0d.appspot.com/o/carrousel%2Fcarrousel01.webp?alt=media&token=ecf817d8-574f-4bfa-a7aa-090d9737237a"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="carouselTextContainer">
                        <img src="images/logo-tr.png" alt="imagenLogo" />
                        <p>La revolución de la salud y la belleza se forja en la cocina</p>
                        <Button variant="secondary"><Link to="/products" className='productsLink'>Nuestros productos</Link></Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/mis-nutrientes-vegan-eaf0d.appspot.com/o/carrousel%2Fcarrousel03.jpg?alt=media&token=e591efb1-77d8-4db8-9d1e-c5e8596cea24"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <div className="carouselTextContainer">
                        <h2>Untables increíbles</h2>
                        <img src="images/logo-tr.png" alt="imagenLogo" />
                        <p>Nuestros untables le darán un toque de distinción a tus picadas y snacks</p>
                        
                        <Button variant="secondary"><Link to="/category/untables" className='productsLink'>Nuestros Untables</Link></Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/mis-nutrientes-vegan-eaf0d.appspot.com/o/carrousel%2Fhamburguesas-de-lentejas-carrousel.jpg?alt=media&token=165a0620-987e-4987-8b85-c10e478d94d4"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <div className="carouselTextContainer">
                        <h2>Medallones</h2>
                        <img src="images/logo-tr.png" alt="imagenLogo" />
                        <p>Que tus hamburguesas sean la estrella de la fiesta!</p>
                        <Button variant="secondary"><Link to={"/category/medallones"} className='productsLink'>Nuestros Medallones</Link></Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/mis-nutrientes-vegan-eaf0d.appspot.com/o/carrousel%2Fcarrousel05.png?alt=media&token=42433899-3b0d-4ba0-aed9-f6b1b90b90b7"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarrouselComponent;