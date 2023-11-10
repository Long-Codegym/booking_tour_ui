import TourFilter from "../home/TourFilter";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {allTourId, getAllToursByZone, getTourByFilter, getToursById} from "../service/toursService";

const ListTourByIdAccount =()=>{
    const dispatch = useDispatch();
    const location = useLocation();
    // const encodedZone = location.pathname.split("/lisTour/")[1];
    // const idAcc = decodeURIComponent(encodedZone);
    const accountData = localStorage.getItem("account");
    let idAccount = null;
    if (accountData) {
        try {
            idAccount = JSON.parse(accountData).id;
        } catch (e) { }
    }
    useEffect(()=>{
        dispatch(allTourId(idAccount));
    },[idAccount])

    const allTourById = useSelector((state) => {
        return state.zone.zone.tourByIdAcc;
    });
    console.log(allTourById)

    return(
        <>
            <div className="container-xxl py-5">

                <div className="container">
                    <div className="row g-0" >
                        {/*sidebar*/}
                        {/*end sidebar*/}
                        <div className="col-lg-9">
                            <div className="row g-0 justify-content-center" style={{width: "1200px"}}>
                                {allTourById &&
                                    allTourById.map((item, key) => (
                                        <div key={key} className="col-lg-3 col-md-3 col-12 custom-item" style={{marginLeft: "5px"}}>
                                            <div className="tour-item">
                                                <div className="package-item">
                                                    <div className="overflow-hidden">
                                                        <img
                                                            className="img-fluid"
                                                            style={{ height: "205px" }}
                                                            src={item.tour.img}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="d-flex border-bottom">
                                                        <small className="flex-fill text-center border-end py-2">
                                                            <i className="fa fa-map-marker-alt text-primary me-2" />
                                                            {item.tour.city.name}
                                                        </small>
                                                        <small className="flex-fill text-center border-end py-2">
                                                            <i className="fa fa-calendar-alt text-primary me-2" />
                                                            {item.tour.tourTime}
                                                        </small>
                                                    </div>
                                                    <div className="text-center p-4">
                                                        <h3 style={{fontSize: "20px",width: "250px"}} className="mb-0">Giá {item.tour.price} / 1 người</h3>
                                                        <div className="mb-3">
                                                            <p style={{ color: "#86B817" }}>Đánh giá</p>
                                                            <small className="fa fa-star text-primary" />
                                                            <small className="fa fa-star text-primary" />
                                                            <small className="fa fa-star text-primary" />
                                                            <small className="fa fa-star text-primary" />
                                                            <small className="fa fa-star text-primary" />
                                                        </div>
                                                        <p>{item.tour.describes}</p>

                                                        <div className="d-flex justify-content-center mb-2">
                                                            <Link to={"/detailTour/" + item.tour.id}>
                                                                <a href="book_tour/src/home/allTourById#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                                                                    Chi tiết Tour
                                                                </a>
                                                            </Link>
                                                            <Link to={"/bookingTour/" + item.tour.id}>
                                                                <a Bo href="book_tour/src/home/allTourById#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                                                                    Đặt Tour ngay
                                                                </a>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListTourByIdAccount;