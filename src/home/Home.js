import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {allZone} from "../service/zoneService";
import Zone from "./Zone";
import PopularTours from "./PopularTours";
import {getAllAccByAdmin} from "../service/accountService";

const Home =()=>{
    const dispatch = useDispatch();
    const user=localStorage.getItem("account");
    useEffect(()=>{
        dispatch(allZone())
    },[])
    return (
        <>
            {/* Destination Start */}
            <PopularTours/>
            {/* Destination Start */}
            {/* Package Start */}
            <Zone/>
        </>

    );
};
export default Home;