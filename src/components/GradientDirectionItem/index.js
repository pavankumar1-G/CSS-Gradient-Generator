// Write your code here
import {GradientDirectionItems, CustomDirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, updateActiveDirection, isActive} = props
  const {value, displayText} = gradientDirectionDetails
  const onClickCustomDirectionButton = () => {
    updateActiveDirection(value)
  }
  return (
    <GradientDirectionItems>
      <CustomDirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickCustomDirectionButton}
      >
        {displayText}
      </CustomDirectionButton>
    </GradientDirectionItems>
  )
}
export default GradientDirectionItem
