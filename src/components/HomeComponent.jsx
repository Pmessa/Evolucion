import React from 'react'
import "./HomeComponent.css"
import CarrouselComponent from './CarrouselComponent'
import FooterComponent from './FooterComponent'
import CardsComponent from './CardsComponent'

const HomeComponent = () =>{


    return <div className="homeComponent">
        <CarrouselComponent />
        <CardsComponent />
        <FooterComponent />

  
    </div>
        


}
export default HomeComponent