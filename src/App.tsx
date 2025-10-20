import ListaDetarefas from './containers/ListaDeTarefa'
import { Container } from './styles'
import EstiloGlobal from './styles'
import BarraLateral from './containers/BarralLateral'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDetarefas />
      </Container>
    </>
  )
}

export default App
