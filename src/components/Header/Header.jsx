import styles from './Header.module.scss'
import { ReactComponent as Logo } from 'assets/images/logo-bonus.svg'
const { headerContainer, logo, score } = styles

const Header = () => {
  return (
    <div className={headerContainer}>
      <div className={logo}>
        <Logo />
      </div>
      <div className={score}>
        <div>SCORE</div>
        <p>12</p>
      </div>
    </div>
  )
}

export default Header
