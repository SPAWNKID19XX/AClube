import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import CookieConsent from './components/coockies-consent/cookies-consent'
import PrivacyPolicy from './components/privacy-policy/privacy-policy'
import CookiesPolicy from './components/cookies-policy/cookies-policy'
import TermsConditions from './components/terms-conditions/terms-conditions'
import SignUpForm from './components/signup-form/signUp-form'
import LoginForm from './components/login-form/login-form'
import { AuthProvider } from './components/auth-context/auth-provider';
import Parties from './components/parties/parties'
import SuccessPaymentPage from './components/payment/success_payment'   

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

                    <Route path="/success.html" element={
                        <>
                            <SuccessPaymentPage/>
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
