import './App.scss'
import { Navigation } from './router/navigation/navigation'
import ItemListContainer from './itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
export function App() {
   return (
    <>
      <Navigation/>
      <ItemListContainer greeting= "Bem vindo à nossa loja!"/>
    </>
  )
}

export default App