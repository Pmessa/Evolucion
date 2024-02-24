import React from 'react'
import HomeTextComponent from '../HomeTextComponent/HomeTextComponent'
import CarrouselComponent from '../CarrouselComponent/CarrouselComponent'

const HomeComponent = () => {
  return (
    <div>
        <div>
        <CarrouselComponent />
        </div>
        <div>
        <HomeTextComponent />
        </div>
        </div>
  )
}

export default HomeComponent