import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {allZone} from "../service/zoneService";
import Zone from "./Zone";
import PopularTours from "./PopularTours";
import {getAllSupplies} from "../service/toursService";
import {getAllAccByAdmin} from "../service/accountService";

const Home =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(allZone())
        dispatch(getAllSupplies())
    },[])
    return (
        <>
            <PopularTours/>
            <Zone/>
        </>

    );
};
export default Home;