import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDetarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcadas como : categoria e termo</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDetarefas
