import { Route, BrowserRouter, Routes } from "react-router"
import SignInAuth from "./auth/sign-up/sign-in"
import SignOutAuth from "./auth/sign-in/sign-out"


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/sign-in" element={<SignInAuth />} />
      <Route path="/sign-in" element={<SignOutAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
