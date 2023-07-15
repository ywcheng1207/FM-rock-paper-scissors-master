import styles from './Footer.module.scss'
const { footerContainer } = styles

const Footer = () => {
  return (
    <div className={footerContainer}>
      <button>RULES</button>
    </div>
  )
}

export default Footer
