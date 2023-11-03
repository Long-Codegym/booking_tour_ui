import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import LoginService from "../service/login";

function Login() {
    // const [loadScript, setLoadScript] = useState(false);
    // Lấy "source" từ URL
    const searchParams = new URLSearchParams(window.location.search);
    const sourceParam = searchParams.get('source');
    const dispatch = useDispatch();
    if (sourceParam === 'email_activation'){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Kích hoạt thành công. Hãy đăng nhập ngay.',
            showConfirmButton: false,
            timer: 1500
        });
    }
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const signUpSchema = yup.object().shape({
        username: yup.string()
            .min(4, "Tài khoản phải lớn 4 ký tự!")
            .max(50, "Too Long!")
            .required("Tài khoản không được để trống")
            .matches(
                /^[a-z0-9]*$/,
                "Tài khoản không được chứa ký tự đặc biệt và chữ hoa"
            ),
        password: yup.string()
            .min(4, "Mật khẩu dài ít nhất 5 ký tự trở lên")
            .max(50, "Too Long!")
            .required("mật khẩu không được để trống")
            .matches(
                /^[a-zA-Z0-9]*$/,
                "Mật khẩu không được chứa ký tự đặc biệt"
            ),
    })
    const handleLogin = async (values) => {
        try {
            const response = await LoginService.login(values);
            const data = response.data;
            console.log(data.isActive);
            if (data.status.name === "Active" && data.isActive) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("account", JSON.stringify(data));
                if (data.role.name ==="ROLE_ADMIN") {
                    navigate("/home_admin");
                } else if (data.role.name ==="ROLE_USER") {
                    navigate("/");
                } else if (data.role.name ===("ROLE_ADMIN2")) {
                    navigate("/");
                }
            } else if (data.status.name === "emailverify") {
                navigate("/login");
                setMessage("tài khoản xác nhận email");
            } else if (data.status.name === "Register") {
                navigate("/login");
                setMessage("tài khoản chưa được chấp nhận");
            } else if (data.status.name === "Block") {
                navigate("/login");
                setMessage("tài khoản của bạn đã bị khóa");
            } else if (!data.isActive) {
                navigate("/login");
                setMessage("tài khoản của bạn đã bị xóa");
            } else {
                navigate("/login");
                setMessage(data);
            }
        } catch (error) {
            navigate("/login");
            setMessage("tài khoản hoặc mật khẩu không chính xác");
        }
    }


    return (
        <>
            <link href="/css_login/all.css" rel="stylesheet"/>
            <link href="/css_login/css.css" rel="stylesheet"/>
            <title>Booking Tour</title>
            <link href="/css_login/8.97b85fe3.chunk.css" rel="stylesheet"/>
            <link href="/css_login/main.3e229f12.chunk.css" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/css_login/9.cb7de3a7.chunk.css"/>
            <link rel="stylesheet" href="/css_login/css-login.css"/>
            <link rel="stylesheet" type="text/css" href="/css_login/css/style.css"/>
            <title>React App</title>
            <div className="notifications-wrapper"></div>
            <div className="main-singin-box">
                <div className="wrapper">
                    <div className="container">
                        <div className="row login-page">
                            <div className="col-md-7 hidden-sm hidden-xs image-login">
                                <img style={{height: '100%', borderRadius: '8px', boxShadow: '5px 5px 7px 0'}}
                                     src="/img_demo/phu_quoc.jpg" className=""
                                     alt="PD"/>
                            </div>
                            <div className="content-main" style={{width: '450px', border: '1px', borderRadius: '8px', backgroundColor: '#fff', padding: '20px', boxShadow: '5px 5px 7px 0'}}>
                                <h3 style={{color: '#f0564a'}}>Du lịch mọi nơi</h3>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                    onSubmit={(values) => handleLogin(values)}
                                    validationSchema={signUpSchema}
                                >
                                    <Form>
                                        <div className="fieldGroup" style={{ height: '80px', fontSize: '14px', color: 'red' }}>
                                            <label htmlFor="username" style={{color:'black'}}>Tên đăng nhập: </label>
                                            <Field type="text" id="username" name="username" maxLength={18} autoComplete="false" />
                                            <ErrorMessage name="username" />
                                            {message && <p style={{ textAlign: 'center' }}>{message}</p>}
                                        </div>
                                        <div className="fieldGroup" style={{ height: '80px', fontSize: '14px', color: 'red' }}>
                                            <label htmlFor="password" style={{color:'black'}}>Mật khẩu:</label>
                                            <Field type="password" id="password" name="password" maxLength={50} autoComplete="false" />
                                            <ErrorMessage name="password" />
                                        </div>
                                        {/*<p className="forgot-password">*/}
                                        {/*    <a href="src/pages/login/Login#"><span>Quên mật khẩu?</span></a>*/}
                                        {/*</p>*/}
                                        <button type="submit"><span>Đăng nhập</span></button>
                                    </Form>

                                </Formik>
                                {/*<button className="btn btn-default">*/}
                                {/*    <i className="fab fa-facebook"></i>*/}
                                {/*    <span>Đăng nhập bằng Facebook</span>*/}
                                {/*</button>*/}

                                <div style={{marginTop: '2px', borderRadius:'10px'}} id={"signInDiv"}></div>

                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <a className="create-new" href={"/register"}>
                                            <p><span>Đăng ký người dùng</span></p>
                                        </a>
                                    </div>
                                    {/*<div className={"col-md-6"}>*/}
                                    {/*    <a className="create-new" href={"/registerCCDV"}>*/}
                                    {/*        <p><span>Đăng ký cung cấp dịch vụ</span></p>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="fb-root" style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}
                 className="fb_reset">
            </div>

        </>
    );
};

export default Login;