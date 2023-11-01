import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./components/Layout";
import Login from "./login/Login";
import Home from "./home/Home";
import AllTourByZone from "./home/AllTourByZone";
import Register from "./register/Register";
import DetailTour from "./home/DetailTour";
import CreateTour from "./admin_2/CreateTour";
import CreateTourTest from "./admin_2/CreateTourTest";

function App() {
  return (
    <>
      <Routes>
          <Route path={"/login"} element={<Login/>}></Route>
          <Route path={"/register"} element={<Register/>}></Route>
          <Route path={"/"} element={<Layout/>}>
              <Route path={""} element={<Home/>}></Route>
              <Route path={"tour/:zone"} element={<AllTourByZone/>}></Route>
              <Route path={"/detail/:id"} element={<DetailTour/>}/>
              <Route path={"/create"} element={<CreateTour/>}/>
              <Route path={"/creates"} element={<CreateTourTest/>}/>
            </Route>
      </Routes>
    </>
  );
}

export default App;
