import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {getAllReviewsByTourId, getToursById, isAbleToReview, sendReview} from "../service/toursService";
import {useNavigate} from "react-router";

const DetailTour = () => {
    // const {tour, setTour} = useState([]);
    // const{id}=useState();
    // console.log(id)
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/tours/?id=${id}` ).then(response => {
    //         setTour(response.data)
    //     })
    // }, []);
    let PageSize = 5;
    const accountData = localStorage.getItem("account");
    const navigate = useNavigate();
    let idAccount = null;
    if (accountData) {
        try {
            idAccount = JSON.parse(accountData).id;
        } catch (e) {
        }
    }
    const dispatch = useDispatch();
    const location = useLocation();
    const encodedZone = location.pathname.split("/detail/")[1];
    const idTour = decodeURIComponent(encodedZone);
    const [page, setPage] = useState(1);
    const [star, setStar] = useState(5);
    const reviews = useSelector(state => {
        return state.zone.zone.byProviderUsername;
    })

    useEffect(() => {
        dispatch(getToursById(idTour))
         dispatch(getAllReviewsByTourId(idTour))
    }, [idTour])
    const tour = useSelector((state) => {
        return state.zone.zone.tour;
    });
    console.log(tour)
    console.log(reviews)
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
    const isAbleReview = useSelector(state => {
        return state.zone.zone.isAble;
    })
    const handleStarClicking1 = (e, star) => {
        setStar(star);
        for (let i = 1; i <= 5; i++) {
            const input = document.querySelector(`#star${i}`);

            if (i <= star) {
                if (!input.classList.contains("fa-star-active")) {
                    input.classList.toggle("fa-star-active");
                }
            } else {
                if (input.classList.contains("fa-star-active")) {
                    input.classList.toggle("fa-star-active");
                }
            }
        }
    }
    const sendReviewFunction = () => {
        const reviewContent = document.querySelector("#reviewContent").value;
        const review = {
            tour: {
                id: idTour
            },
            accountUser: {
                id: idAccount
            },
            rating: star,
            content: reviewContent
        }
        dispatch(sendReview(review)).then((data) => {
            dispatch(getAllReviewsByTourId(idTour));
        });
    }
        useEffect(() => {
            try {
                const ids = {
                    tourId: idTour,
                    userId: idAccount,
                }
                dispatch(isAbleToReview(ids));
            } catch (e) {
            }
        }, [idTour, idAccount])
        // dispatch(
        const [currentPage, setCurrentPage] = useState(1);
        const currentTableData = useMemo(() => {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return reviews.slice(firstPageIndex, lastPageIndex);
        }, [currentPage, reviews]);
    return (

        <>
            <meta charSet="utf-8"/>
            <link href="/css_detail_tour/1.css" rel="stylesheet"/>
            <link href="/css_detail_tour/2.css" rel="stylesheet"/>
            <link href="/resources/css_review/cssReview.css" rel="stylesheet"/>
            <div className="container-xxl py-5">
                <ul id="tour-tab" className="nav nav-tabs">
                    <li className="active">
                        <a data-toggle="tab" href="#tour-schedule" onClick={(e) => {
                            handleStarClicking(e, 1)
                        }}>
                            Thông tin tour
                        </a>
                    </li>
                    <li className="active">
                        <a data-toggle="tab" href="#tour-schedule" onClick={(e) => {
                            handleStarClicking(e, 5)
                        }}>
                            Đánh giá
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
                {
                    page == 5 &&
                        <div className="container">
                            <div className="title-player-profile row">
                                <div style={{marginTop: "20px"}}><p>&nbsp;</p></div>
                                <div className="col-xs-6"><span >Đánh giá</span></div>
                                {
                                    isAbleReview && isAbleReview == true ?
                                        <>
                                            <div style={{marginTop: "50px"}}><p>&nbsp;</p></div>
                                            <textarea placeholder="Nhập đánh giá ..." name="message" type="text"
                                                      className="form-control" defaultValue={""}
                                                      style={{marginLeft: "15px", width: "97%"}} id={"reviewContent"}/>
                                            <>
                                                <style
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            "\n.rate {\n    float: left;\n    height: 46px;\n    padding: 0 10px;\n}\n.rate:not(:checked) > input {\n    position:absolute;\n    top:-9999px;\n}\n.rate:not(:checked) > label {\n    float:right;\n    width:1em;\n    overflow:hidden;\n    white-space:nowrap;\n    cursor:pointer;\n    font-size:30px;\n    color:#ccc;\n}\n.rate:not(:checked) > label:before {\n    content: '★ ';\n}\n\n/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */\n"
                                                    }}
                                                />

                                                <div className="rate" >
                                                    <i className="fas fa-star fa-star-active" id={"star1"} onClick={(e) => {handleStarClicking1(e, 1)}} style={{cursor: "pointer"}}></i>
                                                    <i className="fas fa-star fa-star-active" id={"star2"} onClick={(e) => {handleStarClicking1(e, 2)}} style={{cursor: "pointer"}}></i>
                                                    <i className="fas fa-star fa-star-active" id={"star3"} onClick={(e) => {handleStarClicking1(e, 3)}} style={{cursor: "pointer"}}></i>
                                                    <i className="fas fa-star fa-star-active" id={"star4"} onClick={(e) => {handleStarClicking1(e, 4)}} style={{cursor: "pointer"}}></i>
                                                    <i className="fas fa-star fa-star-active" id={"star5"} onClick={(e) => {handleStarClicking1(e, 5)}} style={{cursor: "pointer"}}></i>
                                                </div>
                                            </>

                                            <div className={"customButton"} onClick={() => {sendReviewFunction()}}>
                                                <p>Gửi</p>
                                            </div>
                                        </>
                                        :
                                        <></>
                                }

                            </div>
                            <div className="text-center review-duo-player row">
                                <div className="col-md-12">
                                    { currentTableData && currentTableData.map((item, key) => {
                                            return (
                                                <div className="full-size" key={key}>
                                                    <div className="review-image-small">
                                                        <div className="avt-rank avt-md"><img
                                                            src={item.accountUser.avatar}
                                                            className="avt-1-15 avt-img" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="wrapper-content-rating">
                                                        <div className="review-content">
                                                            <p className="name-player-review color-vip-1" style={{color: "red", fontSize: "25px"}}>{item.accountUser.fullName}</p>
                                                            <p className="time-player-review">
                                                                 <span>{new Date(item.date).toLocaleTimeString() + " "
                                                                     + new Date(item.date).toLocaleDateString()}</span>
                                                            </p>
                                                        </div>
                                                        <div className="review-rating">
                                                            <div className="rateting-style">
                                                                {
                                                                    [1, 2, 3, 4, 5].map(e => {
                                                                        if (e <= item.rating) {
                                                                            return (<i className="fas fa-star"></i>)
                                                                        }
                                                                    })
                                                                }
                                                                &nbsp;
                                                            </div>
                                                        </div>
                                                        <p className="content-player-review" style={{color: "black",fontSize: "20px"}}>{item.content}</p></div>
                                                </div>

                                            );
                                        })
                                    }

                                    {/* reviews là mảng gốc các phần tử thật */}
                                    {/*    End Pagination*/}
                                </div>
                                {/*<div className="col-md-12">*/}
                                {/*    <div className="page_account"><p className="active">1</p>*/}
                                {/*        <p className="">2</p>*/}
                                {/*        <p className="">3</p>*/}
                                {/*        <p className="">4</p>*/}
                                {/*        <p className="">5</p>*/}
                                {/*        <p className="active" style={{cursor: "auto"}}>1/36</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                }
            </div>
        </>)
};

export default DetailTour;