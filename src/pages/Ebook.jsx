import React from 'react'
import { useItemCollection } from '../hooks/useItemCollection'

const Ebook = () => {
    const {itemId} = useParams();

  const { data, loadin } = useItemCollection("products", itemId)

  return (
    <div><EbookComponent Ebook={data}/></div>
  )
}

export default Ebook