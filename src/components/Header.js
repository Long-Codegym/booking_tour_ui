import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";
import LoginService from "../service/login";

const Header = () =>{
    const navigate = useNavigate();
    const [acc, setAcc] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("account"))
        } catch (e) {
            return {};
        }
    });
    const handleClick = (e) => {
        LoginService.logout().then(r => {
            navigate("/login");
        });
    };
    return (
        <>
            <meta charSet="utf-8" />
            <title>Tourist - Travel Agency HTML Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="" name="keywords" />
            <meta content="" name="description" />
            {/* Favicon */}
            <link href="img/favicon.ico" rel="icon" />
            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet"/>
            {/* Icon Font Stylesheet */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
            {/* Libraries Stylesheet */}
            <link href="../resources/lib/animate/animate.min.css" rel="stylesheet" />
            <link href="../resources/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            <link href="../resources/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet"/>
            {/* Customized Bootstrap Stylesheet */}
            <link href="../resources/css/bootstrap.min.css" rel="stylesheet" />
            <link href="../resources/css/uli_li.css" rel="stylesheet" />
            {/* Template Stylesheet */}
            <link href="../resources/css/style.css" rel="stylesheet" />
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div
                            className="d-inline-flex align-items-center"
                            style={{ height: 45 }}
                        >
                            <small className="me-3 text-light">
                                <i className="fa fa-map-marker-alt me-2" />
                                344 Hoàng Quốc Việt, Hà Nội , Việt Nam
                            </small>
                            <small className="me-3 text-light">
                                <i className="fa fa-phone-alt me-2" />
                                +012 345 6789
                            </small>
                            <small className="text-light">
                                <i className="fa fa-envelope-open me-2" />
                                info@example.com
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-twitter fw-normal" />
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="">
                                <i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a className="navbar-brand p-0">
                        <h1 className="text-primary m-0">
                            <i className="fa fa-map-marker-alt me-3" />
                            Tourist
                        </h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                           <Link to={""}><a  className="nav-item nav-link active">Trang chủ</a></Link>
                            <a href="about.html" className="nav-item nav-link">Về chúng tôi</a>
                            <a href="service.html" className="nav-item nav-link">Dịch vụ</a>
                            <a href="package.html" className="nav-item nav-link">Tour</a>
                        </div>
                        { (acc  && acc.id !=null && acc.role.id ===3) ?
                        <div className="rounded-pill py-2 px-4">
                            <div className="navbar-nav ms-auto py-0">
                            <li className="nav-item nav-link">
                                <a  style={{borderRadius: "10px"}} id="header-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">
                                    <img src={acc.avatar} style={{width: "45px",height: "45px",borderRadius: "50%"}} className="avt-img" alt="PD"
                                    />
                                </a>
                                <ul style={{marginLeft: "-300px"}} role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                    <li role="presentation" className="page-user">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <img
                                                src={acc.avatar}
                                                className="avt-img"
                                                alt="PD"
                                            />
                                            <div className="text-logo">
                                                <h5>Tên</h5>
                                                <p>
                                                    Tên : {acc.fullName}<span></span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-plus" /> <span>Số dư</span> :{" "}
                                            <span className="money">{acc.balance} đ</span>
                                        </a>
                                    </li>
                                    <Link to={"/billUser"}>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-clock" /> <span>Lịch sử đặt Tour</span>
                                        </a>
                                    </li>
                                    </Link>
                                    <Link to={"/detailAcc"}>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-cogs" /> <span>Cài đặt tài khoản</span>
                                        </a>
                                    </li>
                                    </Link>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#" onClick={handleClick}>
                                            <i className="fas fa-power-off" /> <span>Đăng xuất</span>
                                        </a>
                                    </li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active">
                                                <img
                                                    src="https://files.playerduo.net/production/static-files/flag/2.png"
                                                    className="flag flag-vn"
                                                    alt="PD"
                                                />
                                            </div>
                                        </div>
                                        {/*<div className="box-item">*/}
                                        {/*    <a*/}
                                        {/*        href="https://www.facebook.com/groups/playerduovn"*/}
                                        {/*        target="_blank"*/}
                                        {/*        rel="noopener noreferrer"*/}
                                        {/*    >*/}
                                        {/*        <span>Group</span>*/}
                                        {/*    </a>*/}
                                        {/*    <a*/}
                                        {/*        href="https://www.facebook.com/playerduo"*/}
                                        {/*        target="_blank"*/}
                                        {/*        rel="noopener noreferrer"*/}
                                        {/*    >*/}
                                        {/*        <span>Fanpage</span>*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}
                                    </div>
                                </ul>
                            </li>
                            </div>
                        </div> :
                            (acc  && acc.id !=null && acc.role.id ===2) ?
                                <div className="rounded-pill py-2 px-4">
                                    <div className="navbar-nav ms-auto py-0">
                                        <li className="nav-item nav-link">
                                            <a  style={{borderRadius: "10px"}} id="header-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">
                                                <img src={acc.avatar} style={{width: "45px",height: "45px",borderRadius: "50%"}} className="avt-img" alt="PD"
                                                />
                                            </a>
                                            <ul style={{marginLeft: "-300px"}} role="menu" className="dropdown-menu" aria-labelledby="header-nav-dropdown">
                                                <li role="presentation" className="page-user">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <img
                                                            src={acc.avatar}
                                                            className="avt-img"
                                                            alt="PD"
                                                        />
                                                        <div className="text-logo">
                                                            <h5>Tên</h5>
                                                            <p>
                                                                Tên : {acc.fullName}<span></span>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li role="presentation" className="menu-item hidden-lg hidden-md">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <i className="fas fa-plus" /> <span>Số dư</span> :{" "}
                                                        <span className="money">{acc.balance} đ</span>
                                                    </a>
                                                </li>
                                                <Link to={"/billAcc"}>
                                                <li role="presentation" className="menu-item">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <i className="fas fa-clock" /> <span>Các Tour đã được thuê</span>
                                                    </a>
                                                </li>
                                                </Link>
                                                <Link to={"/create"}>
                                                <li role="presentation" className="menu-item">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <i className="fas fa-clock" /> <span>Đăng Tour</span>
                                                    </a>
                                                </li>
                                                </Link>
                                                <Link to={"/lisTour"}>
                                                <li role="presentation" className="menu-item">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <i className="fas fa-clock" /> <span>Danh sách Tour</span>
                                                    </a>
                                                </li>
                                                </Link>
                                                <Link to={"/detailAcc"}>
                                                <li role="presentation" className="menu-item">
                                                    <a role="menuitem" tabIndex={-1} href="#">
                                                        <i className="fas fa-cogs" /> <span>Cài đặt tài khoản</span>
                                                    </a>
                                                </li>
                                                </Link>
                                                <li role="presentation" className="menu-item">
                                                    <a role="menuitem" tabIndex={-1} href="#" onClick={handleClick}>
                                                        <i className="fas fa-power-off" /> <span>Đăng xuất</span>
                                                    </a>
                                                </li>
                                                <div className="menu-item list-flag">
                                                    <div className="box-item">
                                                        <div className="flag-all active">
                                                            <img
                                                                src="https://files.playerduo.net/production/static-files/flag/2.png"
                                                                className="flag flag-vn"
                                                                alt="PD"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/*<div className="box-item">*/}
                                                    {/*    <a*/}
                                                    {/*        href="https://www.facebook.com/groups/playerduovn"*/}
                                                    {/*        target="_blank"*/}
                                                    {/*        rel="noopener noreferrer"*/}
                                                    {/*    >*/}
                                                    {/*        <span>Group</span>*/}
                                                    {/*    </a>*/}
                                                    {/*    <a*/}
                                                    {/*        href="https://www.facebook.com/playerduo"*/}
                                                    {/*        target="_blank"*/}
                                                    {/*        rel="noopener noreferrer"*/}
                                                    {/*    >*/}
                                                    {/*        <span>Fanpage</span>*/}
                                                    {/*    </a>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </ul>
                                        </li>
                                    </div>
                                </div> :
                        <a href="/login" className="btn btn-primary rounded-pill py-2 px-4">
                            Đăng nhập
                        </a>
                        }
                    </div>
                </nav>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">
                                    Tận hường kỳ nghỉ của bạn
                                </h1>
                                <p className="fs-4 text-white mb-4 animated slideInDown">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>*/}
            {/*<!-- JavaScript Libraries -->*/}

        </>
    )
}
export default Header;
