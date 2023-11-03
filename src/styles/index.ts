import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
display: grid;
grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
dispaly: block;
font-weight: bold;
font-size: 18px;
margin-bottom: 40px;
margin-top: 40px;
`

export const Campo = styled.input`
  border-radius: 8px;
  color: #666666;
  font-weight: bold;
  padding: 8px;
  backgraound: #fff;
  border-color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-sezi: 12px;
  line-height: 14px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`



export default EstiloGlobal


