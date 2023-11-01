import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../compónents/FiltroCard"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alteraTermo } from "../../store/reducers/filtro"


const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Busacar"  value={termo} onChange={evento => dispatch(alteraTermo(evento.target.value))}/>
        <S.Filtros>
          <FiltroCard contador={1} legenda="pendentes" />
          <FiltroCard contador={2} legenda="concluídas" />
          <FiltroCard contador={3} legenda="urgentes" />
          <FiltroCard contador={4} legenda="importantes" />
          <FiltroCard contador={5} legenda="normal" />
          <FiltroCard contador={6} legenda="todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
