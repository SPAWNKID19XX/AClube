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
import { AuthProvider } from './components/AuthContext/AuthProvider';
import Parties from './components/Parties/Parties'

function App() {

    return (
        <BrowserRouter future={{ 
            v7_startTransition: true, 
            v7_relativeSplatPath: true 
        }}>
            <AuthProvider>
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
                    <Route path="/parties" element={< Parties />} />
                </Routes>
                <CookieConsent/>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
        
        
    )
}

export default App
