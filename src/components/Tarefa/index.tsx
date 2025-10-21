import { useState } from 'react'
import * as s from './styles'

import * as enums from '../utils/enums/tarefa'

type props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <s.Card>
      <s.Titulo>{titulo}</s.Titulo>
      <s.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </s.Tag>
      <s.Tag parametro="status" status={status}>
        {status}
      </s.Tag>
      <s.Descricao value={descricao} />
      <s.BarraAcoes>
        {estaEditando ? (
          <>
            <s.BotaoSalvar>Salvar</s.BotaoSalvar>
            <s.BotaoCancelarRemoverr onClick={() => setEstaEditando(false)}>
              Cancelar
            </s.BotaoCancelarRemoverr>
          </>
        ) : (
          <>
            <s.Botao onClick={() => setEstaEditando(true)}>Editar</s.Botao>
            <s.BotaoCancelarRemoverr>Remover</s.BotaoCancelarRemoverr>
          </>
        )}
      </s.BarraAcoes>
    </s.Card>
  )
}

export default Tarefa
