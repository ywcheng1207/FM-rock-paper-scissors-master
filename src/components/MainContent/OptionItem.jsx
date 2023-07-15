import styles from './OptionItem.module.scss'

import { ReactComponent as Scissors } from 'assets/images/icon-scissors.svg'
import { ReactComponent as Paper } from 'assets/images/icon-paper.svg'
import { ReactComponent as Rock } from 'assets/images/icon-rock.svg'
import { ReactComponent as Spock } from 'assets/images/icon-spock.svg'
import { ReactComponent as Lizard } from 'assets/images/icon-lizard.svg'
const { optionItem, circle, circleInCircle } = styles

const ItemIcon = ({ type }) => {
  if (type === 'scissors') {
    return <Scissors />
  } else if (type === 'paper') {
    return <Paper />
  } else if (type === 'rock') {
    return <Rock />
  } else if (type === 'spock') {
    return <Spock />
  } else if (type === 'lizard') {
    return <Lizard />
  }
}
const OptionItem = ({ type, phase, onPick }) => {
  return (
    <div
      className={optionItem}
      data-type={type}
      data-step={phase}
      onClick={() => onPick?.(type)}
    >
      <div className={circle}>
        <div className={circleInCircle}>
          <ItemIcon type={type} />
        </div>
      </div>
    </div>
  )
}

export default OptionItem
