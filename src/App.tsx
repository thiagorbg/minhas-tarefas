import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import store from './store'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import { Container } from './styles'
import path from 'path'



const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/novo',
    element: <h1>nova pagina</h1>
  }
])

  function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas}/>
      </Container>
    </Provider>
  )
}

export default App
