// Style your elements here
import styled from 'styled-components'

export const GradientDirectionItems = styled.li`
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin: 15px;
  }
`
export const CustomDirectionButton = styled.button`
  border: none;
  background-color: #ffffff;
  border-radius: 6px;
  height: 36px;
  width: 100px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 150px;
  }
`
