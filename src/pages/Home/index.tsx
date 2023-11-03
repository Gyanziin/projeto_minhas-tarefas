import BotaoAdicionar from "../../compónents/BotaoAdicionar"
import BarraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/ListaDeTarefas"

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    < BotaoAdicionar />
  </>
)

export default Home
