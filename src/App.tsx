import { Route, BrowserRouter, Routes } from "react-router-dom"
import SignUpAuth from "./auth/sign-up/sign-up"
import { Navbar } from "./components/Navbar"
import SignInAuth from "./auth/sign-in/sign-in"



function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/sign-up" element={<SignUpAuth />} />
      <Route path="/sign-in" element={<SignInAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
