import { useState } from 'react'
import OptionItem from './OptionItem'
import styles from './Step2.module.scss'
const {
  step2Container,
  yourPicked,
  yourPickedTitle,
  housePicked,
  housePickedTitle,
  waitContainer,
  wait,
  endContainer,
  endTitle,
  endBtn
} = styles

const End = ({ onStep }) => {
  return (
    <div className={endContainer}>
      <div className={endTitle}>YOU LOSE</div>
      <button className={endBtn} onClick={() => onStep?.('step1')}>
        PLAY AGAIN
      </button>
    </div>
  )
}

const Step2 = ({ onStep, picked }) => {
  const [housePicking, setHousePicking] = useState(true)
  setTimeout(() => {
    setHousePicking(false)
  }, 500)

  return (
    <div className={step2Container}>
      <div className={yourPicked}>
        <div className={yourPickedTitle}>YOU PICKED</div>
        <OptionItem type={picked} phase="step2" />
      </div>
      {housePicking === false && <End onStep={onStep} />}
      <div className={housePicked}>
        <div className={housePickedTitle}>THE HOUSE PICKED</div>
        <div className={waitContainer}>
          {housePicking ? (
            <div className={wait}></div>
          ) : (
            <OptionItem type="scissors" phase="step2" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Step2
