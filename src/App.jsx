import './index.scss'
import './components/style/reset.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}