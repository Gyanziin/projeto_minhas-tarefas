import FiltroCard from "../../compónents/FiltroCard"
import * as S from './styles'


const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Busacar" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
