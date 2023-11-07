import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllAccByAdmin} from "../service/accountService";
import {Outlet} from "react-router";
import {getAllRole} from "../service/roleService";
import {getAllStatus} from "../service/statusService";
import HeaderAdmin from "./HeaderAdmin";

const HomeAdmin = () => {
    const dispatch = useDispatch();
    const idAdmin = JSON.parse(localStorage.getItem("account"));
    useEffect(() => {
        dispatch(getAllAccByAdmin(idAdmin.id));
        dispatch(getAllRole());
        dispatch(getAllStatus());
    }, []);


    return (<>
        <div className="wrapper">
            <div className="home-flex">
                <HeaderAdmin/>
                <Outlet/>
            </div>

        </div>

    </>)
}
export default HomeAdmin;