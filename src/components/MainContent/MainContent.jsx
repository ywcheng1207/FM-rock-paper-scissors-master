import { useState } from 'react'
import styles from './MainContent.module.scss'
// import Step1 from 'components/MainContent/Step1'
import Step2 from 'components/MainContent/Step2'
import Step1 from './Step1'
const { mainContentContainer } = styles
const pickedType = ['scissors', 'paper', 'rock', 'spock', 'lizard']

const MainContent = () => {
  const [step, setStep] = useState('step1')
  const [userPicked, setUserPicked] = useState(null)
  const [housePicked, setHousePicked] = useState(null)

  const handleStep = (phase) => {
    if (phase === 'step1') {
      setHousePicked(null)
    }
    setStep(phase)
  }
  const handleUserPick = (type) => {
    handleStep('step2')
    setUserPicked(type)
  }
  const handleHousePick = (type) => {
    setTimeout(() => {
      setHousePicked(pickedType[type])
    }, 500)
  }

  return (
    <div className={mainContentContainer}>
      {step === 'step1' ? (
        <Step1 onStep={handleStep} onPick={handleUserPick} />
      ) : (
        <Step2
          onStep={handleStep}
          userPicked={userPicked}
          housePicked={housePicked}
          onHousePick={handleHousePick}
        />
      )}
    </div>
  )
}

export default MainContent
