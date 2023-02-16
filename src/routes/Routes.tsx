import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import FindUser from "../pages/FindUser/FindUser";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";

export function MyRoutes() {

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path='/signup'
        element={
          <>
            <Header />
            <Signup />
          </>
        }
      />
      <Route
        path='/finduser'
        element={
          <>
            <Header />
            <FindUser />
          </>
        }
      />
    </Routes>
  )
}