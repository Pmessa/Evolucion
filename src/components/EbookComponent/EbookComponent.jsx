import React from 'react'
import { useItemCollection } from '../../hooks/useItemCollection'
import { useParams } from 'react-router-dom'

const EbookComponent = (Ebook) => {


const {itemId} = useParams()

    const{data, loading}=useItemCollection("productos", itemId)


  return (

    <div>
        <button><link rel="stylesheet" href="${Ebook.ebook}" />leer ebook</button>
    </div>

     
  )
}

export default EbookComponent