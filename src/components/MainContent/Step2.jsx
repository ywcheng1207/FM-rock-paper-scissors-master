import { useEffect } from 'react'
import OptionItem from './OptionItem'
import styles from './Step2.module.scss'
const {
  step2Container,
  yourPicked,
  yourPickedTitle,
  housePickedContainer,
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

const Step2 = ({ onStep, userPicked, onHousePick, housePicked }) => {
  useEffect(() => {
    onHousePick(Math.floor(Math.random() * 5))
  }, [])

  return (
    <div className={step2Container}>
      <div className={yourPicked}>
        <div className={yourPickedTitle}>YOU PICKED</div>
        <OptionItem type={userPicked} phase="step2" />
      </div>
      {housePicked !== null && <End onStep={onStep} />}
      <div className={housePickedContainer}>
        <div className={housePickedTitle}>THE HOUSE PICKED</div>
        <div className={waitContainer}>
          {housePicked === null ? (
            <div className={wait}></div>
          ) : (
            <OptionItem type={housePicked} phase="step2" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Step2
