import React from 'react'
import { useCollection } from "../hooks/useCollection"
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import CarrouselComponent from '../components/CarrouselComponent/CarrouselComponent'
import HomeTextComponent from '../components/HomeTextComponent/HomeTextComponent'
import HomeComponent from '../components/HomeComponent/HomeComponent'

const Home = () => {

  const { data, loading } = useCollection("products")

  return loading ? <LoaderComponent /> : <HomeComponent/>

  
}

export default Home;