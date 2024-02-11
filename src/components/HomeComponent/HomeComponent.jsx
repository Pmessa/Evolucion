import React from 'react'
import "./HomeComponent.css"
import CarrouselComponent from '../CarrouselComponent/CarrouselComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import CardsComponent from '../CardsComponent/CardsComponent'

const HomeComponent = () =>{


    return <div className="homeComponent">
        <CarrouselComponent />
        <CardsComponent />
        <FooterComponent />

  
    </div>
        


}
export default HomeComponent