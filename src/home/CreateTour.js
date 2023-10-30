import axios from "axios";
import Swal from "sweetalert2";
import {ErrorMessage, Field, Formik} from "formik";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as Yup from "yup";

const CreateTour = () => {
    const id=location.pathname.split("/createTour/")[1];
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

    return(<>
        <Formik
            initialValues={{
                dateCreate: '',
                dateStart: '',
                dateEnd: '',
                price: 0,
                total: 0,
                persons:0,
                note:'',
                tour:{
                    id:id
                },
                accountCC:{},
                accountUser:{},
                




            }}
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
                                title: 'Đăng kí thành công, kiểm tra email để xác minh tài khoản.',
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
                                name="nickName"
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
                            <ErrorMessage name="nickName" component="div" className="error" />
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

                        <div className="register-verify-email"  style={{fontSize: '14px', color:'red',height:'70px'}}>
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
    </>)
}
export default CreateTour;