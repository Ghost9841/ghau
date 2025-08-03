import { Route, BrowserRouter, Routes } from "react-router-dom"
import SignUpAuth from "./auth/sign-up/sign-up"
// import { Navbar } from "./components/Navbar"
import SignInAuth from "./auth/sign-in/sign-in"
import SocketConnection from "./socket/Socket"
import Home from "./landingpage/Home/Home"
import GamePage from "./features/Game/GamePage"
import MessageBox from "./features/Message/MessageBox"

function App() {
  return (
    <BrowserRouter>
    <SocketConnection/>
    {/* <Navbar/> */}
    <MessageBox/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/game-zone" element={<GamePage />} />
      <Route path="/sign-up" element={<SignUpAuth />} />
      <Route path="/sign-in" element={<SignInAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
