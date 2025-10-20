import FiltroCard from '../../components/FiltroCard'
import * as s from './styles'

const BarraLateral = () => (
  <s.Aside>
    <div>
      <s.Campo type="text" placeholder="buscar" />
      <s.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluidas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard legenda="todas" contador={6} ativo />
      </s.Filtros>
    </div>
  </s.Aside>
)

export default BarraLateral
