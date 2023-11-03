const HeaderAdmin = () => {
  return(<>
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
      <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
              <a href="" className="navbar-brand p-0">
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
                      <a href="index.html" className="nav-item nav-link active">Trang chủ</a>
                      <a href="about.html" className="nav-item nav-link">Về chúng tôi</a>
                      <a href="service.html" className="nav-item nav-link">Dịch vụ</a>
                      <a href="package.html" className="nav-item nav-link">Tour</a>
                      {/*<div className="nav-item dropdown">*/}
                      {/*    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>*/}
                      {/*    <div className="dropdown-menu m-0">*/}
                      {/*        <a href="destination.html" className="dropdown-item">*/}
                      {/*            Destination*/}
                      {/*        </a>*/}
                      {/*        <a href="booking.html" className="dropdown-item">*/}
                      {/*            Booking*/}
                      {/*        </a>*/}
                      {/*        <a href="team.html" className="dropdown-item">*/}
                      {/*            Travel Guides*/}
                      {/*        </a>*/}
                      {/*        <a href="testimonial.html" className="dropdown-item">*/}
                      {/*            Testimonial*/}
                      {/*        </a>*/}
                      {/*        <a href="404.html" className="dropdown-item">*/}
                      {/*            404 Page*/}
                      {/*        </a>*/}
                      {/*    </div>*/}
                      {/*</div>*/}
                      {/*<a href="contact.html" className="nav-item nav-link">*/}
                      {/*    Contact*/}
                      {/*</a>*/}
                  </div>
                  <a href="/login" className="btn btn-primary rounded-pill py-2 px-4">
                      Đăng nhập
                  </a>
              </div>
          </nav>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{}}>
          </div>
      </div>

  </>)
}
export default HeaderAdmin;