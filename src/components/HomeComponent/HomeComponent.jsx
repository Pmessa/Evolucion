import React from 'react'
import "./HomeComponent.css"
import CarrouselComponent from '../CarrouselComponent/CarrouselComponent'


const HomeComponent = () => {


    return <div className="homeComponent">
        <CarrouselComponent />

        <div className="homeTextContainer">
            <h1>Bienvenidos a mi Cocina Vegana Naturista</h1>
            <p>Soy <strong>Claudia Mendes Neto</strong>, chef apasionada por la alimentación consciente y saludable. Mi misión es crear <strong>alimentos de excelente calidad</strong> que nutran tanto el cuerpo como el alma.</p>
            <h2>Ingredientes Naturales y Orgánicos</h2>
            <p>En mi cocina, solo utilizo <strong>materiales orgánicos e integrales</strong> cuidadosamente seleccionados. Cada plato está compuesto por ingredientes frescos y cultivados de manera sostenible. Creo firmemente en la conexión entre lo que comemos y nuestra salud, por lo que priorizo los alimentos que provienen directamente de la naturaleza.</p>
            <h2>100% Basados en Plantas y Veganos</h2>
            <p>Mis creaciones <strong>100% veganas</strong>. No solo son deliciosas, sino también respetuosas con el medio ambiente y los animales. Desde coloridas ensaladas hasta platos reconfortantes, cada bocado está lleno de sabor y vitalidad.</p>
            <h2>Para Clientes Selectos</h2>
            <p>Mis servicios están diseñados para aquellos que buscan una experiencia culinaria única. Si eres un amante de la buena comida, un apasionado de la salud o simplemente alguien que desea explorar nuevos sabores, estás en el lugar correcto. ¡Bienvenidos a mi mundo gastronómico!🌱🍽️</p>
        </div>
      


    </div>



}
export default HomeComponent