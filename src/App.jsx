import { CartProvider } from './context/CartContext';

import MainRouter from './routes/MainRouter';
import MainLayout from './layout/MainLayout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  )
}

export default App
