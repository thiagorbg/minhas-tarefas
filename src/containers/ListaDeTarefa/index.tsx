import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar Typerscript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: ' importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: ' urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir par a academia',
    descricao: 'Fazer  treino B',
    prioridade: ' importante',
    status: 'pendente'
  }
]

const ListaDetarefas = () => (
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

export default ListaDetarefas
