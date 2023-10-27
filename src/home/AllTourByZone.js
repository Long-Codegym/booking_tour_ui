import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllToursByZone} from "../service/toursService";

const AllTourByZone =() =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const encodedZone = location.pathname.split("/tour/")[1];
    const nameZone = decodeURIComponent(encodedZone);

    useEffect(()=>{
        dispatch(getAllToursByZone(nameZone))
    },[nameZone])
    const allTourByZone = useSelector((state) => {
        console.log(state.zone.zone.allTourByZone)
        return state.zone.zone.allTourByZone;
    });

    return(
        <>
            <>
                {/* Package Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            {/*<h6 className="section-title bg-white text-center text-primary px-3">*/}
                            {/*    Packages*/}
                            {/*</h6>*/}
                            {allTourByZone && allTourByZone.length > 0 && (
                                <h1 className="mb-5">Các Tour {allTourByZone[0].city.zone.name}</h1>
                            )}
                        </div>
                        <div className="row g-4 justify-content-center">
                            {allTourByZone && allTourByZone.map((item,key)=>(
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="package-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" style={{height: "205px"}} src={item.img}alt="" />
                                        </div>
                                        <div className="d-flex border-bottom">
                                            <small className="flex-fill text-center border-end py-2">
                                                <i className="fa fa-map-marker-alt text-primary me-2"/>
                                                {item.city.name}
                                            </small>
                                            <small className="flex-fill text-center border-end py-2">
                                                <i className="fa fa-calendar-alt text-primary me-2"/>{item.tourTime}
                                            </small>
                                            {/*<small className="flex-fill text-center py-2">*/}
                                            {/*    {item.tour.tourTime}*/}
                                            {/*</small>*/}
                                        </div>
                                        <div className="text-center p-4">
                                            <h3 className="mb-0">{item.price}</h3>
                                            <div className="mb-3">
                                                <small className="fa fa-star text-primary"/>
                                                <small className="fa fa-star text-primary"/>
                                                <small className="fa fa-star text-primary"/>
                                                <small className="fa fa-star text-primary"/>
                                                <small className="fa fa-star text-primary"/>
                                            </div>
                                            <p>
                                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                                amet diam eos
                                            </p>
                                            <div className="d-flex justify-content-center mb-2">
                                                <a href="book_tour/src/home/AllTourByZone#"
                                                   className="btn btn-sm btn-primary px-3 border-end"
                                                   style={{borderRadius: "30px 0 0 30px"}}>
                                                    Chi tiết Tour
                                                </a>
                                                <a href="book_tour/src/home/AllTourByZone#"
                                                   className="btn btn-sm btn-primary px-3"
                                                   style={{borderRadius: "0 30px 30px 0"}}>
                                                    Đặt Tour ngay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Package End */}
            </>

        </>
    )
}
export default AllTourByZone;