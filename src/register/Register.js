import {ErrorMessage, Field, Formik} from "formik";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import {useNavigate} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(6, 'Tên đăng nhập phải có ít nhất 6 ký tự'),
    password: Yup.string()
        .required('Mật khẩu là bắt buộc')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/(?=.*\d)/, 'Mật khẩu phải chứa ít nhất một chữ số'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp')
        .required('Nhập lại mật khẩu là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    fullName: Yup.string().required('Tên người dùng là bắt buộc'),
    address: Yup.string().required('Địa chỉ là bắt buộc'),
});
const Register = () => {
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');
    useEffect(() => {
        setMessage('');
        setMessage2('');
    }, []);

    const navigate = useNavigate();

    const resetMessage = () => {
        setMessage('');
        setMessage2('');
    }

    return (
        <>
            <meta charSet="utf-8"/>
            <title>Tourist - Travel Agency HTML Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="keywords"/>
            <meta content="" name="description"/>
            {/* Favicon */}
            <link href="img/favicon.ico" rel="icon"/>
            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link
                href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
                rel="stylesheet"/>
            {/* Icon Font Stylesheet */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
            {/* Libraries Stylesheet */}
            <link href="../resources/lib/animate/animate.min.css" rel="stylesheet"/>
            <link href="../resources/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
            <link href="../resources/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet"/>
            {/* Customized Bootstrap Stylesheet */}
            <link href="../resources/css/bootstrap.min.css" rel="stylesheet"/>
            {/* Template Stylesheet */}
            <link href="../resources/css/style.css" rel="stylesheet"/>
            {/* Spinner Start */}
            {/*<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
            {/*    <div*/}
            {/*        className="spinner-border text-primary"*/}
            {/*        style={{ width: "3rem", height: "3rem" }}*/}
            {/*        role="status">*/}
            {/*        <span className="sr-only">Loading...</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* Spinner End */}
            {/* Topbar Start */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div
                            className="d-inline-flex align-items-center"
                            style={{height: 45}}
                        >
                            <small className="me-3 text-light">
                                <i className="fa fa-map-marker-alt me-2"/>
                                344 Hoàng Quốc Việt, Hà Nội , Việt Nam
                            </small>
                            <small className="me-3 text-light">
                                <i className="fa fa-phone-alt me-2"/>
                                +012 345 6789
                            </small>
                            <small className="text-light">
                                <i className="fa fa-envelope-open me-2"/>
                                info@example.com
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{height: 45}}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-twitter fw-normal"/>
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-facebook-f fw-normal"/></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                className="fab fa-linkedin-in fw-normal"/></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                                <i className="fab fa-instagram fw-normal"/></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="">
                                <i className="fab fa-youtube fw-normal"/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0">
                            <i className="fa fa-map-marker-alt me-3"/>
                            Tourist
                        </h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"/>
                    </button>
                </nav>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h2 className="display-3 text-white mb-3 animated slideInDown">
                                    ĐĂNG KÝ
                                </h2>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        confirmPassword: '',
                                        email: '',
                                        fullName: '',
                                        address: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, actions) => {
                                        // Đây là nơi xử lý submit form sau khi đã validate thành công
                                        console.log(values);
                                        axios.post('http://localhost:8080/accounts/createAccount',values,)
                                            .then(async (response) => {
                                                 console.log( response)
                                               if (response.data === 'Username') {
                                                    setMessage("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
                                                } else if (response.data === 'Email') {
                                                    setMessage2("Email đã được đăng ký. Vui lòng sử dụng email khác.");
                                                } else if (response.data === 'Done') {
                                                    await Swal.fire({
                                                        position: 'center',
                                                        icon: 'success',
                                                        title: 'Đăng kí thành công.',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    });
                                                    navigate("/")
                                                }


                                            })
                                            .finally(() => {
                                                actions.setSubmitting(false);
                                            });
                                    }}
                                >
                                    {({ handleSubmit, isSubmitting }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="fieldGroup" style={{ display: 'flex',height:'70px' }}>
                                                <div className="input-wrapper" style={{width:'50%', fontSize: '14px', color:'red'}}>
                                                    <Field
                                                        type="text"
                                                        name="username"
                                                        placeholder="Tên đăng nhập"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        onFocus={resetMessage}
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none',
                                                            width:'250px'
                                                        }}
                                                    />
                                                    <ErrorMessage name="username" component="div" className="error" />
                                                </div>

                                                <div className="input-wrapper" style={{marginLeft:'10px',width:'50%', fontSize:'14px', color:'red'}}>
                                                    <Field
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="Tên người dùng"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none', width:'250px'
                                                        }}
                                                    />
                                                    <ErrorMessage name="fullName" component="div" className="error" />
                                                </div>

                                                {message && (
                                                    <div className="error">
                                                        {message}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="fieldGroup" style={{ display: 'flex',height:'70px' }}>
                                                <div className="input-wrapper"  style={{width:'50%', fontSize: '14px', color:'red'}}>
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Mật khẩu"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none', width:'250px'
                                                        }}
                                                    />
                                                    <ErrorMessage name="password" component="div" className="error" />
                                                </div>

                                                <div className="input-wrapper"  style={{marginLeft:'10px' ,width:'50%', fontSize: '14px', color:'red'}}>
                                                    <Field
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder="Nhập lại mật khẩu"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none', width:'250px'
                                                        }}
                                                    />
                                                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                                                </div>
                                            </div>
                                            <div className="fieldGroup" style={{ display: 'flex',height:'70px' }}>
                                                <div className="input-wrapper"  style={{width:'50%', fontSize: '14px', color:'red'}}>
                                                    <Field
                                                        type="text"
                                                        name="address"
                                                        placeholder="Địa chỉ"
                                                        maxLength="5000"
                                                        autoComplete="false"
                                                        style={{
                                                            textAlign: 'center',
                                                            borderRadius: '7px',
                                                            padding: '7px',
                                                            margin: '10px',
                                                            outline: 'none', width:'250px'
                                                        }}
                                                    />
                                                    <ErrorMessage name="address" component="div" className="error" />
                                                </div>

                                                <div className="register-verify-email"  style={{marginLeft: '136px', fontSize: '14px', color:'red',height:'70px'}}>
                                                <div className="fieldGroup">

                                                    <Field type="email" name="email" placeholder="Email" maxLength="5000" autoComplete="false" onFocus={resetMessage} style={{marginLeft:'150px',textAlign: 'center', borderRadius: '7px', padding: '7px', margin: '10px', outline: 'none', width:'250px'}}
                                                    />
                                                    <ErrorMessage name="email" component="div" className="error"/>
                                                </div>

                                                {message2 && (
                                                    <div className="error">
                                                        {message2}
                                                    </div>
                                                )}
                                            </div>
                                            </div>
                                            <div className="recaptcha">
                                                {/* Đoạn mã reCAPTCHA */}
                                            </div>
                                            <button type={"submit"} disabled={isSubmitting}
                                                    style={{marginTop: '2px', marginLeft: '0', marginBottom: '20px', height: '30px', borderRadius: '10px', alignContent: 'center'}}>
                                                <span style={{margin: '20px', padding: '10px',}}>Đăng ký tài khoản</span>
                                            </button>
                                        </form>
                                    )}
                                </Formik>

                                <p className="fs-4 text-white mb-4 animated slideInDown">
                                </p>
                                {/*<div className="position-relative w-75 mx-auto animated slideInDown">*/}
                                {/*    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"/>*/}
                                {/*    <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: 7 }}>*/}
                                {/*        Search*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>*/}
            {/*<!-- JavaScript Libraries -->*/}
        </>
    )
};
export default Register;