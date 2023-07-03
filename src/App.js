import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard>
          <br />
          <br />
          <br />
        </Dashboard>}>

        </Route>
        <Route path='/signup' element={<SignUp>
          <br />
          <br />
          <br />
        </SignUp>}>


        </Route>
        <Route path="/login" element={
          <Login>
            <br />
            <br />
            <br />
          </Login>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
