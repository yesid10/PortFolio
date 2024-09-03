import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Layout/Navbar'
import About from '../Components/About/About'
import Service from '../Components/Services/Service'
import Portfolio from '../Components/Portfolio/Portfolio'
import ContactPage from '../Components/Contact/ContactPage'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/service' element={<Service/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter