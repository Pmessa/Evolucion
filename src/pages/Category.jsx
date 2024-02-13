import React from 'react';

import { useCollection } from '../hooks/useCollection';
import { useParams } from 'react-router-dom'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import AllProductsComponent from '../components/AllProducts/AllProductsComponent';

const Category = () => {

    const [productsFiltered, setProductFiltered]= React.useState([]);
    const { categoryId } = useParams();
  
    const{ data, loading } = useCollection("products")
  
  React.useEffect(() =>{
    const productsFiltered = data.filter((product)=> {
      return product.category === categoryId; })
      setProductFiltered(productsFiltered);
    },[data, categoryId]);
  
    return (
         loading? <LoaderComponent /> : <AllProductsComponent  ProductsData={productsFiltered}/>
        );
    };
  
  export default Category;