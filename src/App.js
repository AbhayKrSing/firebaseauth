import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resetpassword from './components/Resetpassword'
import UpdateProfile from "./components/UpdateProfile";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Dashboard>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Dashboard>} />



        <Route path='/signup' element={<SignUp>
          <br />
          <br />
          <br />
        </SignUp>} />



        <Route path="/login" element={
          <Login>
            <br />
            <br />
            <br />
          </Login>
        } />
        <Route path="/forgetpassword" element={
          <Resetpassword>
            <br />
            <br />
            <br />
          </Resetpassword>
        } />
        <Route path="/updateprofile" element={
          <UpdateProfile>
            <br />
            <br />
            <br />
          </UpdateProfile>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
