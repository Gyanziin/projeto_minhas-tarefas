import styled from "styled-components";

import { Props } from ".";

type PropsSemLegengendaEContador = Omit<Props, 'contador' | 'legenda'>



export const Card = styled.div<PropsSemLegengendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#FCFCFC')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5E5E5E')};
  border-radius: 8px;

`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 25px;
  display: block;

`

export const Label = styled.div`
  font-size: 14px;
`
