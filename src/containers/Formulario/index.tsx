import { MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Titulo" />
      <Campo as="textarea" placeholder="Descricão da Tarefa" />
      <div>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="urgente">importante</label>
        <input name="prioridade" type="radio" id="Normal" />{' '}
        <label htmlFor="urgente">Normal</label>
      </div>
      <button type="submit">Cadastrar</button>
    </Form>
  </MainContainer>
)

export default Formulario
