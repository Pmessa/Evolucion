
import { useItemCollection } from '../hooks/useItemCollection';

import { useParams } from 'react-router-dom';
import DetailComponent from '../components/DetailComponent/DetailComponent';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Details = () => {

  const {itemId} = useParams();

  const { data, loadin } = useItemCollection("products", itemId)
  return (

    loadin ? <LoaderComponent /> : <DetailComponent DetalleProducto={data} />

  );
};

export default Details;