// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const GradientGeneratorResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-iems: center;
  justify-content: center;
  text-align: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const DirectionTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const GradientDirectionList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 35px;
`
export const ColorPickorTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ColorPickorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ColorValueAndColorContainer = styled.div`
  margin: 30px;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ColorCustomInput = styled.input`
  border: none;
  height: 45px;
  width: 105px;
  border-radius: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 115px;
  }
`
export const GenerativeButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #00c9b7;
  height: 36px;
  width: 120px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  color: #1e293b;
  align-self: center;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 125px;
  }
`
