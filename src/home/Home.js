import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {allZone} from "../service/zoneService";
import Zone from "./Zone";
import PopularTours from "./PopularTours";
import {getAllSupplies, tourByMonth} from "../service/toursService";
import {getAllAccByAdmin} from "../service/accountService";

const Home =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(allZone())
        dispatch(getAllSupplies())
        dispatch(tourByMonth())
    },[])
    return (
        <>
            <PopularTours/>
            <Zone/>
        </>

    );
};
export default Home;