import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
