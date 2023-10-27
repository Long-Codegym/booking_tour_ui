import {useEffect, useState} from "react";
import axios from "axios";

const DetailTour = () => {
    const {tour, setTour} = useState([]);
    const{id}=useState();
    useEffect(() => {
        axios.get(`http://localhost:8080/tours/?id=${id}` ).then(response => {
            setTour(response.data)
        })
    }, []);

    return (
        <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight:'400px'}}>
                        <div className="position-relative h-100">
                            <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit:"cover"}}/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Tour</h6>
                        <h1 className="mb-4">
                            {tour.name}
                        </h1>
                        <p className="mb-4">
                            {tour.convenientWard}
                        </p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                    {tour.price}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                    {tour.tourTime}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                    {tour.schedule}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                    {tour.bookings}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>chưa biz ghi thêm gì</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>chưa biz ghi thêm gì</p>
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
};
export default DetailTour;