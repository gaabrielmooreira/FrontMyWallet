import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import NewEntryPage from './Pages/NewEntryPage'
import NewLeavePage from './Pages/NewLeavePage'
import HomePage from './Pages/HomePage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-entrada" element={<NewEntryPage />} />
                <Route path="/nova-saida" element={<NewLeavePage />} />
            </Routes>
        </BrowserRouter>
    )
}