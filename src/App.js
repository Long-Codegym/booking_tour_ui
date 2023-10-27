import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./components/Layout";
import Register from "./register/Register";
import DetailTour from "./register/DetailTour";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/register"} element={<Register/>}></Route>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/detail/:id"} element={<DetailTour/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
