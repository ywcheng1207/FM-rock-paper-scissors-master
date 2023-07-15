import OptionItem from './OptionItem'
import styles from './Step1.module.scss'
import { ReactComponent as Pentagon } from 'assets/images/bg-pentagon.svg'
const { pentagonContainer } = styles

const Step1 = ({ onStep, onPick }) => {
  return (
    <div className={pentagonContainer}>
      <Pentagon />
      <OptionItem type="scissors" phase="step1" onStep={onStep} onPick={onPick} />
      <OptionItem type="paper" phase="step1" onStep={onStep} onPick={onPick} />
      <OptionItem type="rock" phase="step1" onStep={onStep} onPick={onPick} />
      <OptionItem type="spock" phase="step1" onStep={onStep} onPick={onPick} />
      <OptionItem type="lizard" phase="step1" onStep={onStep} onPick={onPick} />
    </div>
  )
}

export default Step1
