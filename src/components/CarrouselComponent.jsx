import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./CarrouselComponent.css"

function CarrouselComponent() {
    return (
        <Carousel className='carrouselHome'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/carrousel/carrousel01.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="carouselTextContainer">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="secondary">Más Info!</Button>{' '}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/carrousel/carrousel02.webp"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carrousel/carrousel05.png"
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