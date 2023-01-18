import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import NewEntryPage from './pages/NewEntryPage'
import HomePage from './pages/HomePage'
import NewExitPage from "./pages/NewExitPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-entrada" element={<NewEntryPage />} />
                <Route path="/nova-saida" element={<NewExitPage />} />
            </Routes>
        </BrowserRouter>
    )
}