import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import { AboutUs } from './aboutUs'
import { Dashboard } from './dashboard'



import { Login } from './login'
export const Pages: React.FC = () => {
    return (
        <div className="pages">
            <BrowserRouter>


                <Routes>

                    <Route path='/' element={<Login />} />
                    <Route path='about-us' element={<AboutUs />} />

                    <Route path="dashboard" element={<Dashboard />} />



                    <Route path="login" element={<Login />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}