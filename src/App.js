import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./components/Layout";
import Login from "./login/Login";
import Home from "./home/Home";
import AllTourByZone from "./home/AllTourByZone";
import Register from "./register/Register";
import DetailTour from "./home/DetailTour";
import CreateTour from "./home/CreateTour";
import HomeAdmin from "./admin/HomeAdmin";
import ShowAcc from "./admin/ShowAcc";

function App() {
    const user = localStorage.getItem("account");
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/register"} element={<Register/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"tour/:zone"} element={<AllTourByZone/>}></Route>
                    <Route path={"/detail/:id"} element={<DetailTour/>}/>
                    <Route path={"/createTour/:id"} element={<CreateTour/>}/>
                </Route>
                {/*{user&&user.role.name ==="ROLE_ADMIN"?*/}
                <Route path={"/home_admin"} element={<HomeAdmin/>}>
                    <Route path={""} element={<ShowAcc/>}/>
                </Route>

                {/*:<></>}*/}
            </Routes>
        </>
    );
}

export default App;
