import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Zone = () => {
    const dispatch = useDispatch();

    const allZone = useSelector((state) => {
        return state.zone.zone.allZone;
    });
    return (
        <>
            {/* Package Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        {/*<h6 className="section-title bg-white text-center text-primary px-3">*/}
                        {/*    Packages*/}
                        {/*</h6>*/}
                        <h1 className="mb-5">Danh sách tour</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {allZone && allZone.map((item, key) => (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <Link to={"/tour/" + item.zone.name}>
                                    <div className="package-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={item.zone.img} alt=""/>
                                        </div>
                                        <div className="d-flex border-bottom">
                                            <small className="flex-fill text-center border-end py-2">
                                                <i className="fa fa-map-marker-alt text-primary me-2"/>
                                                {item.zone.name}
                                            </small>
                                            <small className="flex-fill text-center border-end py-2">
                                                {item.tourNumber} Tour
                                            </small>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Zone;