import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variveis from '../../styles/variveis'

export const Circulo = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  left: 90%;
  bottom: 40px;
  border-radius: 50%;
  text-decoration: none;
  background-color: ${variveis.verde};
  color: #fff;
  position: fixed;
  font-size: 40px;
`
