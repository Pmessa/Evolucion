import React from 'react'
import "./AllProducts.css"
import { useNavigate } from 'react-router-dom';


const AllProductsComponent  = ({ ProductsData }) => {

  const Navigate = useNavigate()
  return (
    <div className='productsContainer'>

      {ProductsData.map((item) => {

        return (
          <div className='listItemsContainer' key={item.id}>
            <div className='imgHomeContainer'>
              <img className='imgHome' src={item.img01} alt="Imágen del producto"/>
            </div>
            <div className='descriptionContainer'>
              <h1 className='titleContainer'>{item.title}</h1>
              <h3 className='description'>{item.description}</h3>
            </div>
              <div className='buttonContainer'>
                <button onClick={() => Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</button>
              </div>
          </div>
                  )
      })}
    </div>
  );
}

export default AllProductsComponent
