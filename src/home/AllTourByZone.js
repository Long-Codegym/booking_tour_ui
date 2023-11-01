import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllSupplies, getAllToursByZone, getTourByFilter} from "../service/toursService";
import TourFilter from "./TourFilter";

const AllTourByZone =() =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const encodedZone = location.pathname.split("/tour/")[1];
    const nameZone = decodeURIComponent(encodedZone);


    const allTourByZone = useSelector((state) => {
        return state.zone.zone.allTourByZone;
    });

    const [filter, setFilter] = useState({
        idCity: null,
        nameZone: '',
        minPrice: null,
        maxPrice: null
    });
    const setIdCity = (e) => {
        const id = e.target.value;
        setFilter({
            ...filter,
            idCity: id === "Chọn thành phố" ? null : id,
            nameZone: nameZone
        });
    }
    const setPrice = (e) => {
        const price = e.target.value;
        const [minPrice, maxPrice] = price.split('-');
        setFilter({
            ...filter,
            minPrice: minPrice,
            maxPrice: maxPrice,
            nameZone: nameZone
        });
    }
    useEffect(()=>{
        dispatch(getAllToursByZone(nameZone));
        dispatch(getTourByFilter(filter))
    },[nameZone,filter])
    console.log(filter  )
    const newArrCities = [];
    const arrayCheckCities = [];

    allTourByZone.forEach((item) => {
        const cityId = item.tour.city.id;
        if (!arrayCheckCities.includes(cityId)) {
            newArrCities.push(item);
            arrayCheckCities.push(cityId);
        }
    });
    return(
        <>
                {/* Package Start */}
                <div className="container-xxl py-5">

                    <div className="container">
                        <div className="row g-0">
                            {/*sidebar*/}
                            <div className="col-lg-2" style={{marginLeft: "-200px"}}>
                                <div className="sidebar">
                                    <p>Thành phố</p>
                                    <select onChange={setIdCity}>
                                        <option  value={null}>Chọn thành phố</option>
                                        {newArrCities.map((cityInfo, key) => (
                                            <option key={key} value={cityInfo.tour.city.id}>{cityInfo.tour.city.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="sidebar">
                                    <p>Giá</p>
                                    <div>
                                        <label>
                                            <input type="radio" name="price" value="null-1000000" onChange={setPrice}/> Dưới 1,000,000 VND
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name="price" value="1000000-2000000"  onChange={setPrice}/> 1,000,000 - 2,000,000 VND
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name="price" value="2000000-3000000"  onChange={setPrice}/> 2,000,000 - 3,000,000 VND
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name="price" value="3000000-5000000"  onChange={setPrice}/> 3,000,000 - 5,000,000 VND
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name="price" value="5000000-null"  onChange={setPrice}/> Trên 5,000,000 VND
                                        </label>
                                    </div>
                                </div>
                            </div >
                            {/*end sidebar*/}
                            <div className="col-lg-9">
                                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                {allTourByZone && allTourByZone.length > 0 && (
                                    <h1 className="mb-5" value={allTourByZone[0].tour.city.zone.id} >Các Tour {allTourByZone[0].tour.city.zone.name}</h1>
                                )}
                            </div>
                                {(filter.idCity != null || filter.minPrice != null || filter.maxPrice != null) &&
                                    <TourFilter/>
                                }
                                <div className="row g-1 justify-content-center">
                                        {allTourByZone &&
                                            allTourByZone.map((item, key) => (
                                                <div key={key} className="col-lg-5 col-md-5 col-12 custom-item" style={{marginLeft: "5px"}}>
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
                                                                        <a href="book_tour/src/home/AllTourByZone#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                                                                            Chi tiết Tour
                                                                        </a>
                                                                        <a href="book_tour/src/home/AllTourByZone#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
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
                        </div>
                    </div>
                    </div>
                </div>
                {/* Package End */}
        </>
    )
}
export default AllTourByZone;