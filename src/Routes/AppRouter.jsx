import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Layout/Navbar'
import About from '../Components/About/About'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter