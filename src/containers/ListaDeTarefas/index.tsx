import { useSelector } from "react-redux"

import Tarefa from "../../compónents/Tarefa"
import { Container } from "./styles"

import { RootReducer } from "../../store"


const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(item => item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0)
  }


  return (
    (
      <Container>
        <p>
          2 tarefas marcadas como: &apos;categoria&apos; e &apos;{termo}&apos;
        </p>
        <ul>
          {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
            id={t.id}
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status} />

          </li>
          ))}
        </ul>
      </Container>
    )
  )
}

export default ListaDeTarefas
