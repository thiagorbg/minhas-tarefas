import { useState } from 'react'
import * as s from './styles'

type props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <s.Card>
      <s.Titulo>{titulo}</s.Titulo>
      <s.Tag>{prioridade}</s.Tag>
      <s.Tag>{status}</s.Tag>
      <s.Descricao value={descricao} />
      <s.BarraAcoes>
        {estaEditando ? (
          <>
            <s.Botao>Salvar</s.Botao>
            <s.Botao onClick={() => setEstaEditando(false)}>Cancelar</s.Botao>
          </>
        ) : (
          <>
            <s.Botao onClick={() => setEstaEditando(true)}>Editar</s.Botao>
            <s.Botao>Remover</s.Botao>
          </>
        )}
      </s.BarraAcoes>
    </s.Card>
  )
}

export default Tarefa
