import styles from './MainPage.module.scss'
import Header from 'components/Header/Header'
import MainContent from 'components/MainContent/MainContent'
import Footer from 'components/Footer/Footer'

const { mainPageContainer } = styles

const MainPage = () => {
  return (
    <>
      <div className={mainPageContainer}>
        <Header />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}
export default MainPage
