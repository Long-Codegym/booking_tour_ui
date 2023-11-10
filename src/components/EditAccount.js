import {useEffect, useState} from "react";
import {id} from "date-fns/locale";
import {useSelector} from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


const EditAccount = () => {
    const userDetail = JSON.parse(localStorage.getItem("account"));
    const [active, setActive] = useState(null);
    const [account, setAccount] = useState([]);
    const navigate = useNavigate();
    const [mess, setMess] = useState("")
    const [password, setPassword] = useState({
        oldP: '',
        newP: ''
    })
    // const allRole = useSelector(state => {
    //     return state.admin.admin.allRole;
    // })
    // const allStatus = useSelector(state => {
    //     return state.admin.admin.allStatus;
    // })
    const upRole = () => {
        console.log("a")
        axios.get(`http://localhost:8080/accounts/levelUp?id=${userDetail.id}`,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).then(data => {
            console.log(data)
            if (data.data === "Done") {
                navigate('/login')
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.data
                });
            }
        });
    }
    const handleClick = (e) => {
        setActive(e.target.id)
    };
    const setNewPass = () => {
        axios.get(`http://localhost:8080/accounts/setNewPass?NewPassword=${password.newP}&OldPassword=${password.oldP}`, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).then(data => {
            if (data.data == "Done") {
                navigate('/login')
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.data
                });
            }
        });
    }
    const handleInputChange = (e, field) => {
        const newValue = e.target.value.trim();
        setAccount({
            ...userDetail,
            [field]: newValue
        });
    };
    const handleInputPass = (e, field) => {
        const newValue = e.target.value.trim();
        setPassword({
            ...password,
            [field]: newValue
        })

    }
    useEffect(() => {
    }, [account]);
    const submit = () => {
        console.log(account)
        axios.post(`http://localhost:8080/accounts/editAccount?id=-1`, account).then(data => {
            console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: data.data.message
            });
        });
        localStorage.removeItem("account");
        navigate("/login")
    }
    return (<>
        <div className="container-fluid" style={{
            border: 'black',
        }}>
            <div className="row">

                <div className="col-3">
                    <ul className="list-group ">
                        <li className={active == 0 ? "list-group-item active" : "list-group-item"} id={0}
                            onClick={(e) => handleClick(e)}>Thông tin cơ bản
                        </li>
                        <li className={active == 1 ? "list-group-item active" : "list-group-item"} id={1}
                            onClick={(e) => handleClick(e)}>Thay đổi thông tin
                        </li>
                        <li className={active == 2 ? "list-group-item active" : "list-group-item"} id={2}
                            onClick={(e) => handleClick(e)}>Đổi mật khẩu
                        </li>
                        {userDetail && userDetail.role.name == 'ROLE_USER' ?
                            <li className={active == 3 ? "list-group-item active" : "list-group-item"} id={3}
                                onClick={(e) => handleClick(e)}>Xin Cấp quyền
                            </li> : <></>}

                    </ul>
                </div>
                <div className="col-9">
                    {active == 0 ? <>
                        <div className="row" style={{
                            color: 'black',
                            border: '1px solid',
                            borderColor: '#f5f5f5',
                            borderRadius: '9px',
                            padding: '20px'
                        }}>
                            <div className="col-md-4" style={{marginLeft: '2%'}}>
                                <img src={userDetail.avatar} style={{width: '300px', height: '300px'}}/>

                            </div>
                            <div className="col-md-7">
                                <ul className="list-group" style={{textAlign: 'center'}}>
                                    <li className="list-group-item active"
                                        style={{textTransform: 'uppercase'}}>{userDetail.username}</li>
                                    <li className="list-group-item">FullName : {userDetail.fullName}</li>
                                    <li className="list-group-item">Email : {userDetail.email} </li>
                                    <li className="list-group-item">Address : {userDetail.address} </li>
                                    <li className="list-group-item">Balance : {userDetail.balance} </li>
                                    <li className="list-group-item">Role : {userDetail.role.name} </li>
                                    <li className="list-group-item">Status : {userDetail.status.name} </li>
                                </ul>
                            </div>

                        </div>
                    </> : <></>}
                    {active == 1 ? <>
                        <div className="row" style={{
                            color: 'black',
                            border: '1px solid',
                            borderColor: '#f5f5f5',
                            borderRadius: '9px',
                            padding: '20px'
                        }}>
                            <div className="col-md-4" style={{marginLeft: '2%'}}>
                                <img src={userDetail.avatar} style={{width: '300px', height: '300px'}}/>
                            </div>
                            <div className="col-md-7" style={{backgroundColor: 'whitesmoke'}}>
                                <p style={{color: 'black', textAlign: 'center', textTransform: 'uppercase'}}>Thông tin
                                    có thể thay đổi </p>
                                <div style={{marginLeft: '15%'}}>
                                    <label id={'fullName'} style={{width: '30%', color: 'black'}}>FullName :</label>
                                    <input id={'fullName'} placeholder={userDetail.fullName}
                                           onChange={(e) => handleInputChange(e, 'fullName')}
                                           style={{
                                               border: 'black',
                                               borderRadius: '5px',
                                               width: '80%', textAlign: 'center'
                                           }}/>
                                </div>
                                <div style={{marginLeft: '15%'}}>
                                    <label id={'email'} style={{width: '30%', color: 'black'}}>Email :</label>
                                    <input id={'email'} placeholder={userDetail.email}
                                           onChange={(e) => handleInputChange(e, 'email')}
                                           style={{
                                               border: 'none',
                                               borderRadius: '5px',
                                               boxShadow: '0 0 5px rgba(0,0,0,0)',
                                               width: '80%', textAlign: 'center'
                                           }}/>
                                </div>
                                <div style={{marginLeft: '15%'}}>
                                    <label id={'address'} style={{width: '30%', color: 'black'}}>Address :</label>
                                    <input id={'address'} placeholder={userDetail.address}
                                           onChange={(e) => handleInputChange(e, 'address')}

                                           style={{
                                               border: 'none',
                                               borderRadius: '5px',
                                               boxShadow: '0 0 5px rgba(0,0,0,0)',
                                               width: '80%', textAlign: 'center'
                                           }}/>
                                </div>
                                <div style={{marginLeft: '15%'}}>
                                    <label id={'avatar'} style={{width: '30%', color: 'black'}}>Address :</label>
                                    <input id={'avatar'} placeholder={userDetail.avatar}
                                           onChange={(e) => handleInputChange(e, 'avatar')}
                                           style={{
                                               border: 'none',
                                               borderRadius: '5px',
                                               boxShadow: '0 0 5px rgba(0,0,0,0)',
                                               width: '80%', textAlign: 'center'
                                           }}/>

                                </div>

                                <div style={{padding: '20px'}}>
                                    <button className="btn btn-success"
                                            style={{marginLeft: '40%', borderRadius: '5px',}} onClick={submit}>Cập Nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </> : <></>}
                    {active == 2 ? <>
                        <div className='row'>
                            <div className="col-md-5">
                                <div>
                                    <label id={'oldPassWord'} style={{width: '30%', color: 'black'}}>OldPassWord
                                        :</label>
                                    <input id={'oldPassWord'} placeholder="Nhập Mật Khẩu Cũ "
                                           onChange={(e) => handleInputPass(e, 'oldP')}

                                           style={{
                                               border: 'none',
                                               borderRadius: '5px',
                                               boxShadow: '0 0 5px rgba(0,0,0,0)',
                                               width: '80%', textAlign: 'center'
                                           }}/>

                                </div>
                                <div>
                                    <label id={'newPassWord'} style={{width: '30%', color: 'black'}}>NewPassWord
                                        :</label>
                                    <input id={'newPassWord'} placeholder="Nhập Mật Khẩu Mới "
                                           onChange={(e) => handleInputPass(e, 'newP')}
                                           style={{
                                               border: 'none',
                                               borderRadius: '5px',
                                               boxShadow: '0 0 5px rgba(0,0,0,0)',
                                               width: '80%', textAlign: 'center'
                                           }}/>

                                </div>
                                <div style={{padding: '20px'}}>
                                    <button className="btn btn-success"
                                            style={{marginLeft: '20%', borderRadius: '5px',}}
                                            onClick={setNewPass}
                                    >Thay Đổi Mật Khẩu
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2" style={{color: 'red'}}>{mess}</div>
                        </div>
                    </> : <></>}
                    {active == 3 ?
                        <div className='row'>
                            <div className="col-md-5">
                                <h2>Thông tin cần chú ý</h2>
                                <p>-Chỉ có thể chuyển từ người mua thành người bán. </p>
                                <p>-Khi chuyển quyền tài khoản cần chi trả chi phí là 1 củ. </p>
                                <button style={{backgroundColor: '#04AA6D'}} onClick={upRole}>Chuyển</button>
                            </div>
                        </div>
                        : <></>}
                </div>
            </div>
        </div>
    </>)
}


export default EditAccount;