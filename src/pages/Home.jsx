import React from 'react'
import { useCollection } from "../hooks/useCollection"
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import HomeComponent from '../components/HomeComponent/HomeComponent'

const Home = () => {

  const { data, loading } = useCollection("products")
  return loading ? <LoaderComponent /> : <HomeComponent />
  
}

export default Home;