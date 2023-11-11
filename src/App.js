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
import BookingTour from "./home/BookingTour";
import HomeAdmin from "./admin/HomeAdmin";
import ShowAcc from "./admin/ShowAcc";
import ListTourByIdAccount from "./admin_2/ListTourByIdAccount";
import DetailTourAdmin2 from "./admin_2/DetailTourAdmin2";
import BillCCTour from "./admin_2/BillCCTour";
import BillUser from "./user/BillUser";
import EditAccount from "./components/EditAccount";

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
              <Route path={"/bookingTour/:id"} element={<BookingTour/>}/>
              <Route path={"/lisTour"} element={<ListTourByIdAccount/>}/>
              <Route path={"/detailTour/:id"} element={<DetailTourAdmin2/>}/>
              <Route path={"/billAcc"} element={<BillCCTour/>}/>
              <Route path={"/billUser"} element={<BillUser/>}/>
                  <Route path={"/detailAcc"} element={<EditAccount/>}></Route> : <></>
            </Route>
              <Route path={"/home_admin"} element={<HomeAdmin/>}>
                  <Route path={""} element={<ShowAcc/>}/>
              </Route>
      </Routes>
    </>
  );}
export default App;
