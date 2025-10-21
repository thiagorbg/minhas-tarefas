import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../components/utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'estudar typerscript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
