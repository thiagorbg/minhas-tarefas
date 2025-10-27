import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarralLateral'
import ListaDetarefas from '../../containers/ListaDeTarefa'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDetarefas />
    <BotaoAdicionar />
  </>
)

export default Home
