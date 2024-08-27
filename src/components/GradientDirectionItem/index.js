// Write your code here
import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientButtonDetails, active, onChangeDirection} = props
  const {directionId, value, displayText} = gradientButtonDetails

  const onClickDirection = () => {
    onChangeDirection(value)
  }
  return (
    <DirectionItem>
      <DirectionButton type="button" active={active} onClick={onClickDirection}>
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
