
import { useItemCollection } from '../hooks/useItemCollection';
import { useParams } from 'react-router-dom';
import CartComponent from '../components/CartComponent/CartComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';


const Cart= () => {


  const {itemId} = useParams();

  const { data, loadin } = useItemCollection("products", itemId)
  return (

    loadin ? <LoaderComponent /> : <CartComponent CartProduct={data} />

  )
};

export default Cart;