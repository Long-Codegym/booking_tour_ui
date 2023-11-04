import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const TourFilter =()=>{
    const tourFilter = useSelector((state) => {
        return state.zone.zone.tourByFilter;
    });
    console.log(tourFilter);
    return(
        <>
            <div className="row g-1 justify-content-center">
                {tourFilter &&
                    tourFilter.map((item, key) => (
                        <div key={key} className="col-lg-5 col-md-5 col-12 custom-item">
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
                                        <h3 className="mb-0">Giá {item.tour.price} / 1 người</h3>
                                        <div className="mb-3">
                                            <p style={{ color: "#86B817" }}>Đánh giá</p>
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p>{item.tour.describes}</p>
                                        <Link to={"/detail/" + item.tour.id}>
                                            <div className="d-flex justify-content-center mb-2">
                                                <a
                                                    href="book_tour/src/home/AllTourByZone#"
                                                    className="btn btn-sm btn-primary px-3 border-end"
                                                    style={{ borderRadius: "30px 0 0 30px" }}
                                                >
                                                    Chi tiết Tour
                                                </a>
                                                <a
                                                    href="book_tour/src/home/AllTourByZone#"
                                                    className="btn btn-sm btn-primary px-3"
                                                    style={{ borderRadius: "0 30px 30px 0" }}
                                                >
                                                    Đặt Tour ngay
                                                </a>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}
export default TourFilter;