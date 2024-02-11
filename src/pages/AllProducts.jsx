import React from 'react'
import { useCollection } from "../hooks/useCollection"
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import AllProductsComponent from '../components/AllProducts/AllProductsComponent'

const AllProducts = () => {

  const { data, loading } = useCollection("products")
  return loading ? <LoaderComponent /> : <AllProductsComponent ProductsData = {data}/>
  
}

export default AllProducts;