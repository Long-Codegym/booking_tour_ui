import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./components/Layout";
import Login from "./login/Login";
import Home from "./home/Home";
import AllTourByZone from "./home/AllTourByZone";

function App() {
  return (
    <>
      <Routes>
          <Route path={"/login"} element={<Login/>}></Route>
          <Route path={"/"} element={<Layout/>}>
              <Route path={""} element={<Home/>}></Route>
              <Route path={"tour/:zone"} element={<AllTourByZone/>}></Route>
            </Route>
      </Routes>
    </>
  );
}

export default App;
