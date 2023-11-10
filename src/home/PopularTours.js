import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const PopularTours =()=>{
    const tourMonth = useSelector((state) => {
        return state.zone.zone.tourByMonth;
    });
    console.log(tourMonth)
    return (
        <>
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        {/*<h6 className="section-title bg-white text-center text-primary px-3">*/}
                        {/*    Destination*/}
                        {/*</h6>*/}
                        <h1 className="mb-5">Địa điểm phổ biến trong tháng</h1>
                    </div>
                    { tourMonth && tourMonth.length >0 &&
                    <div className="row g-3" style={{width: "1000px", height:"auto"}}>
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <Link to={"/detail/" + tourMonth[0].id}>
                                        <img className="img-fluid" style={{width : "600px"}} src={tourMonth[0].img} alt="" />
                                        </Link>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                            {tourMonth[0].discount} %
                                        </div>
                                        <div  className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            {tourMonth[0].name}
                                        </div>
                                    </a>
                                </div>
                                { tourMonth[1] &&
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <Link to={"/detail/" + tourMonth[1].id}>
                                        <img className="img-fluid" src={tourMonth[1].img} alt="" />
                                        </Link>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                            {tourMonth[1].discount} %
                                        </div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            {tourMonth[1].name}
                                        </div>
                                    </a>
                                </div>
                                }
                                { tourMonth[2] &&
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <Link to={"/detail/" + tourMonth[2].id}>
                                        <img className="img-fluid" src={tourMonth[2].img} alt="" />
                                        </Link>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                            {tourMonth[2].discount} %
                                        </div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            {tourMonth[2].name}
                                        </div>
                                    </a>
                                </div>
                                }
                            </div>
                        </div>
                        { tourMonth[3] &&
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href="">
                                <Link to={"/detail/" + tourMonth[3].id}>
                                <img className="img-fluid position-absolute w-100 h-100" src={tourMonth[3].img} alt=""
                                     style={{ objectFit: "cover" }}/>
                                </Link>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                    {tourMonth[3].discount} %
                                </div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                    {tourMonth[3].name}
                                </div>
                            </a>
                        </div>
                        }
                    </div>
                    }
                </div>
            </div>
        </>
    )
}
export default PopularTours;