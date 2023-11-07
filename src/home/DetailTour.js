import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {getToursById} from "../service/toursService";

const DetailTour = () => {
    // const {tour, setTour} = useState([]);
    // const{id}=useState();
    // console.log(id)
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/tours/?id=${id}` ).then(response => {
    //         setTour(response.data)
    //     })
    // }, []);
    const dispatch = useDispatch();
    const location = useLocation();
    const encodedZone = location.pathname.split("/detail/")[1];
    const idTour = decodeURIComponent(encodedZone);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getToursById(idTour))
    }, [idTour])
    const tour = useSelector((state) => {
        return state.zone.zone.tour;
    });
    console.log(tour)

    const handleStarClicking = (e, num) => {
        setPage(num);
    }
    const [visibleImages, setVisibleImages] = useState(6);
    const loadMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 6)
    };
    const loadImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages - 6)
    };
    return (

        <>
            <meta charSet="utf-8"/>
            <link href="/css_detail_tour/1.css" rel="stylesheet"/>
            <link href="/css_detail_tour/2.css" rel="stylesheet"/>
            <div className="container-xxl py-5">
                <ul id="tour-tab" className="nav nav-tabs">
                    <li className="active">
                        <a data-toggle="tab" href="#tour-schedule" onClick={(e) => {
                            handleStarClicking(e, 1)
                        }}>
                            Thông tin tour
                        </a>
                    </li>
                    <li className="">
                        <a data-toggle="tab" href="#tour-pricing" onClick={(e) => {
                            handleStarClicking(e, 2)
                        }}>
                            Giá
                        </a>
                    </li>
                    <li className="">
                        <a data-toggle="tab" href="#tour-info" onClick={(e) => {
                            handleStarClicking(e, 3)
                        }}>
                            Hình ảnh Tour
                        </a>
                    </li>
                    <li className="">
                        <a data-toggle="tab" href="#tour-overview" onClick={(e) => {
                            handleStarClicking(e, 4)
                        }}>
                            Lịch Trình
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container-xxl py-5">
                {page == 1 && tour && tour.tour &&
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100" src={tour.tour.img} alt=""
                                         style={{objectFit: "cover"}}/>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start text-primary pe-3">Thông tin về
                                    Tour</h6>
                                <h1 className="mb-4">
                                   Tour: {tour.tour.name}
                                </h1>
                                <p className="mb-4">
                                    Phương tiện {tour.tour.convenientWard}
                                </p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                          Giá:  {tour.tour.price} VNĐ /1 người
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                          Thời gian Tour:  {tour.tour.tourTime} ngày
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                          Mô tả:  {tour.tour.describes}
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>
                                            Đã đặt: {tour.tour.bookings} Tour
                                        </p>
                                    </div>
                                    {/*<div className="col-sm-6">*/}
                                    {/*    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>chưa*/}
                                    {/*        biz ghi thêm gì</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6">*/}
                                    {/*    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>chưa*/}
                                    {/*        biz ghi thêm gì</p>*/}
                                    {/*</div>*/}
                                </div>
                                <Link to={"/bookingTour/" +tour.tour.id}>
                                <a class="btn btn-primary py-3 px-5 mt-2" href="">Đặt Tour</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    {page == 2 && tour && tour.tour &&
                        <table className="table_style table_list table_list__bg">
                            <thead>
                            <tr>
                                <th width="5%">STT</th>
                                <th width="17%">Giá người lớn</th>
                                <th width="17%">Giá trẻ em</th>
                                <th width="17%" className="center">
                                    Ưu đãi
                                </th>
                                <th width="15%">Hành động</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-th="STT" className="center">
                                    1{" "}
                                </td>
                                <td data-th="Giá người lớn" className="center pri">
                                    <span className="price-bg__pro">{tour.tour.price} / 1 người</span>
                                </td>
                                <td data-th="Giá trẻ em" className="center pri">
                                    <span className="price-bg__pro">dưới 6 tuổi miễn phí</span>
                                </td>
                                <td data-th="Suất ăn" className="center" style={{color: "red"}}>
                                    {tour.tour.discount}%
                                </td>
                                <td data-th="Hành động" className="center">
                                    <Link to={"/bookingTour/" + tour.tour.id}>
                                    <a target="_blank" className="btn-tour btn-tour__pro" href="booking/243/76">
                                        Đặt ngay
                                    </a>
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    }

                </div>
                <div className="container">
                    {page == 3 && tour && tour.image &&
                        <div className="image-gallery">
                            {tour.image.slice(0, visibleImages).map((item, key) => (
                                // <div className="row g-5">
                                <div key={key} className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="position-relative">
                                        <img
                                            className="img-fluid w-100"
                                            src={item.img}
                                            alt=""
                                            style={{objectFit: "cover", maxHeight: "200px"}}
                                        />
                                    </div>
                                </div>
                            ))}
                            {visibleImages < tour.image.length ? (
                                <div className="container" style={{marginLeft: "45%"}}>
                                    <button className="btn btn-primary" onClick={loadMoreImages}>
                                        Xem thêm
                                    </button>
                                </div>
                            ) : <div className="container" style={{marginLeft: "45%"}}>
                                <button className="btn btn-primary" style={{backgroundColor: "#86B817"}}
                                        onClick={loadImages}>
                                    Thu ngọn
                                </button>
                            </div>}
                        </div>
                    }
                </div>
                {page == 4 && tour && tour.tour && tour.tour.tourSchedule &&
                    <div className="d-flex flex-between">
                        <div className="two-info__right">
                            {tour.tour.tourSchedule.map((item, key) => (
                                <div className="item-lichtrinh">
                                    <div className="lichtrinh__time-bar"/>
                                    <div className="lichtrinh__author">
                                        <div className="lichtrinh__author-img">Ngày {item.day}</div>
                                    </div>
                                    <div className="lichtrinh__container">
                                        <div className="lichtrinh__triangle-background"/>
                                        <div className="lichtrinh__triangle"/>
                                        <div className="inner-lichtrinh__container">
                                            <h3><i className="fa fa-map-marker"/> {item.content}{" "}
                                            </h3>
                                            <div className="desc-lichtrinh">
                                                <p dir="ltr" style={{lineHeight: "1.2", textAlign: "justify", marginTop: "0pt", marginBottom: "0pt"}}>
              <span style={{lineHeight: "1.8"}}>
                <span style={{fontSize: 14}}>
                  <span style={{fontFamily: "gothamnarrowbook"}}>
                    <span id="docs-internal-guid-3f1004fd-7fff-023a-d025-34c63ad47530">
                      <span style={{fontFamily: "gothamnarrowmedium"}}>
                        <span style={{
                            color: "rgb(0, 0, 0)",
                            backgroundColor: "transparent",
                            fontWeight: 700,
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            verticalAlign: "baseline",
                            whiteSpace: "pre-wrap"
                        }}>
                          Buổi sáng:
                        </span>
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          backgroundColor: "transparent",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {" "}
                      </span>
                      <span
                          style={{
                              color: "rgb(0, 0, 0)",
                              fontVariantNumeric: "normal",
                              fontVariantEastAsian: "normal",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap"
                          }}>
                        {item.morning}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
                                                </p>
                                                <p align="justify" style={{textAlign: "justify"}}>
              <span style={{lineHeight: "1.8"}}>
                <span style={{fontSize: 14}}>
                  <span style={{fontFamily: "gothamnarrowbook"}}>
                    <span id="docs-internal-guid-3f1004fd-7fff-023a-d025-34c63ad47530">
                      <span style={{fontFamily: "gothamnarrowmedium"}}>
                        <span style={{
                            color: "rgb(0, 0, 0)",
                            backgroundColor: "transparent",
                            fontWeight: 700,
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            verticalAlign: "baseline",
                            whiteSpace: "pre-wrap"
                        }}>
                          Buổi trưa:
                        </span>
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          backgroundColor: "transparent",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {" "}
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {item.noon}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
                                                </p>
                                                <p align="justify" style={{textAlign: "justify"}}>
              <span style={{lineHeight: "1.8"}}>
                <span style={{fontSize: 14}}>
                  <span style={{fontFamily: "gothamnarrowbook"}}>
                    <span id="docs-internal-guid-3f1004fd-7fff-023a-d025-34c63ad47530">
                      <span style={{fontFamily: "gothamnarrowmedium"}}>
                        <span style={{
                            color: "rgb(0, 0, 0)",
                            backgroundColor: "transparent",
                            fontWeight: 700,
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            verticalAlign: "baseline",
                            whiteSpace: "pre-wrap"
                        }}>
                          Buổi chiều:
                        </span>
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          backgroundColor: "transparent",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {" "}
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {item.afternoon}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
                                                </p>
                                                <p align="justify" style={{textAlign: "justify"}}>
              <span style={{lineHeight: "1.8"}}>
                <span style={{fontSize: 14}}>
                  <span style={{fontFamily: "gothamnarrowbook"}}>
                    <span id="docs-internal-guid-3f1004fd-7fff-023a-d025-34c63ad47530">
                      <span style={{fontFamily: "gothamnarrowmedium"}}>
                        <span style={{
                            color: "rgb(0, 0, 0)",
                            backgroundColor: "transparent",
                            fontWeight: 700,
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            verticalAlign: "baseline",
                            whiteSpace: "pre-wrap"
                        }}>
                          Buổi tối:
                        </span>
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          backgroundColor: "transparent",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {" "}
                      </span>
                      <span style={{
                          color: "rgb(0, 0, 0)",
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap"
                      }}>
                        {item.evening}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                }
            </div>
        </>)
};
export default DetailTour;