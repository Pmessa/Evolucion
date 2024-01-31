import MainRouter from './routes/MainRouter';
import MainLayout from './layout/MainLayout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  )
}

export default App
