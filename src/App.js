import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NewEntryPage from './pages/NewEntryPage'
import HomePage from './pages/HomePage'
import NewExitPage from "./pages/NewExitPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-entrada" element={<NewEntryPage />} />
                <Route path="/nova-saida" element={<NewExitPage />} />
            </Routes>
        </BrowserRouter>
    )
}