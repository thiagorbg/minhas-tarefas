import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as s from './styles'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

type props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  return (
    <s.Card>
      <s.Titulo>{titulo}</s.Titulo>
      <s.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </s.Tag>
      <s.Tag parametro="status" status={status}>
        {status}
      </s.Tag>
      <s.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <s.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <s.BotaoCancelarRemoverr
              onClick={() => {
                setEstaEditando(false)
                setDescricao(descricaoOriginal)
              }}
            >
              Cancelar
            </s.BotaoCancelarRemoverr>
          </>
        ) : (
          <>
            <s.Botao onClick={() => setEstaEditando(true)}>Editar</s.Botao>
            <s.BotaoCancelarRemoverr onClick={() => dispatch(remover(id))}>
              Remover
            </s.BotaoCancelarRemoverr>
          </>
        )}
      </s.BarraAcoes>
    </s.Card>
  )
}

export default Tarefa
