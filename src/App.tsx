import ListaDetarefas from './containers/ListaDeTarefa'
import { Container } from './styles'
import EstiloGlobal from './styles'
import BarraLateral from './containers/BarralLateral'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDetarefas />
      </Container>
    </Provider>
  )
}

export default App
