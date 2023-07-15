import { useState } from 'react'
import styles from './MainContent.module.scss'
// import Step1 from 'components/MainContent/Step1'
import Step2 from 'components/MainContent/Step2'
import Step1 from './Step1'
const { mainContentContainer } = styles

const MainContent = () => {
  const [step, setStep] = useState('step1')
  const [picked, setPicked] = useState('')
  const handleStep = (phase) => {
    setStep(phase)
  }
  const handlePick = (type) => {
    handleStep('step2')
    // console.log(type)
    setPicked(type)
  }

  return (
    <div className={mainContentContainer}>
      {step === 'step1' ? (
        <Step1 onStep={handleStep} onPick={handlePick} />
      ) : (
        <Step2 onStep={handleStep} picked={picked} />
      )}
    </div>
  )
}

export default MainContent
