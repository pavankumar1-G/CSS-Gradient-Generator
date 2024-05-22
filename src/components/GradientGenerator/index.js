import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  GradientGeneratorResponsive,
  Heading,
  DirectionTitle,
  GradientDirectionList,
  ColorPickorTitle,
  ColorPickorContainer,
  ColorValueAndColorContainer,
  ColorValue,
  ColorCustomInput,
  GenerativeButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromInputColor: '#8ae323',
    toInputColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColorInput = event => {
    this.setState({fromInputColor: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toInputColor: event.target.value})
  }

  updateActiveDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onClickGenerativeBtn = () => {
    const {fromInputColor, toInputColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromInputColor}, ${toInputColor}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromInputColor,
      toInputColor,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer gradientValue={gradientValue} data-testid ='gradientGenerator'>
        <GradientGeneratorResponsive>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionTitle>Choose Direction</DirectionTitle>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachGradient => (
              <GradientDirectionItem
                key={eachGradient.directionId}
                gradientDirectionDetails={eachGradient}
                updateActiveDirection={this.updateActiveDirection}
                isActive={activeGradientDirection === eachGradient.value}
              />
            ))}
          </GradientDirectionList>
          <ColorPickorTitle>Pick the Colors</ColorPickorTitle>
          <ColorPickorContainer>
            <ColorValueAndColorContainer>
              <ColorValue>{fromInputColor}</ColorValue>
              <ColorCustomInput
                type="color"
                onChange={this.onChangeFromColorInput}
                value={fromInputColor}
              />
            </ColorValueAndColorContainer>
            <ColorValueAndColorContainer>
              <ColorValue>{toInputColor}</ColorValue>
              <ColorCustomInput
                type="color"
                onChange={this.onChangeToColorInput}
                value={toInputColor}
              />
            </ColorValueAndColorContainer>
          </ColorPickorContainer>
          <GenerativeButton onClick={this.onClickGenerativeBtn}>
            Generate
          </GenerativeButton>
        </GradientGeneratorResponsive>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
