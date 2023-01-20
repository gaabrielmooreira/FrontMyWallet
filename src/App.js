import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage.js'
import NewEntryPage from './pages/NewEntryPage.js'
import HomePage from './pages/HomePage.js'
import NewExitPage from "./pages/NewExitPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import AuthContext from "./contexts/AuthContext.js";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("");

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/nova-entrada" element={<NewEntryPage />} />
                    <Route path="/nova-saida" element={<NewExitPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}