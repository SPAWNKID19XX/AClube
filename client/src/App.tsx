import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import CookieConsent from './components/coockiesConsent/CookiesConsent'
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy'
import CookiesPolicy from './components/cookiesPolicy/CookiesPolicy'
import TermsConditions from './components/termsConditions/TermsConditions'
import SignUpForm from './components/SignupForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/privacy-policy" element={
            <>
                <PrivacyPolicy/>
            </>
        }/>

        <Route path="/cookie-policy" element={
            <>
                <CookiesPolicy/>
            </>
        }/>


        <Route path="/terms-conditions" element={
            <>
                <TermsConditions/>
            </>
        }/>
        <Route path="/signup" element={
            <>
                <SignUpForm/>
            </>
        }/>
        <Route path="/login" element={
            <>
                <LoginForm/>
            </>
        }/>
      </Routes>
      <CookieConsent/>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
