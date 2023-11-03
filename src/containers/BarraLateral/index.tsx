import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FiltroCard from "../../compónents/FiltroCard"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alteraTermo } from "../../store/reducers/filtro"
import * as enums from '../../utils/enums/Tarfa'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}


const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo type="text" placeholder="Busacar"  value={termo} onChange={evento => dispatch(alteraTermo(evento.target.value))}/>
            <S.Filtros>
              <FiltroCard valor={enums.Status.PENDENTE} criterio="status" legenda="pendentes" />
              <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluídas" />
              <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="urgentes" />
              <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio="prioridade" legenda="importantes" />
              <FiltroCard valor={enums.Prioridade.NORMAL} criterio="prioridade" legenda="normal" />
              <FiltroCard valor={enums.Status.PENDENTE} criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
