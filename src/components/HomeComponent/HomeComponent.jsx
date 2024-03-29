import React from 'react'
import HomeTextComponent from '../HomeTextComponent/HomeTextComponent'
import CarrouselComponent from '../CarrouselComponent/CarrouselComponent'
import "./HomeComponent.css"

const HomeComponent = () => {
  return (
    <div>
        <div>
        <CarrouselComponent />
        </div>
        <div className='homeTextContainer'>
        <HomeTextComponent />
        </div>
    </div>
  )}
export default HomeComponent