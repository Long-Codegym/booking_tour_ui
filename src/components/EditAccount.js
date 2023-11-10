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
    const [pass, setPass] = useState(['']);
    // const allRole = useSelector(state => {
    //     return state.admin.admin.allRole;
    // })
    // const allStatus = useSelector(state => {
    //     return state.admin.admin.allStatus;
    // })
    const handleClick = (e) => {
        setActive(e.target.id)
        if(e.target.id==2){

        }
    };
    const handleInputChange = (e, field) => {
        const newValue = e.target.value.trim();
        setAccount({
            ...userDetail,
            [field]: newValue
        });
    };
    useEffect(() => {

    }, []);
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
                        {/*<li className={active == 3 ? "list-group-item active" : "list-group-item"} id={3}*/}
                        {/*    onClick={(e) => handleClick(e)}>Xin Cấp quyền*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <div className="col-9">
                    {active == 0 ? <>
                        <div className="row" style={{color: 'black'}}>
                            <div className="col-md-4">
                                <img src={userDetail.avatar} style={{width: '300px', height: '300px'}}/>

                            </div>
                            <div className="col-md-6">
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
                        <div className="row">
                            <div className="col-md-4">
                                <img src={userDetail.avatar} style={{width: '300px', height: '300px'}}/>
                            </div>
                            <div className="col-md-5" style={{backgroundColor: 'whitesmoke'}}>
                                <p style={{color: 'black', textAlign: 'center', textTransform: 'uppercase'}}>Thông tin
                                    có thể thay đổi </p>
                                <div style={{marginLeft:'15%'}}>
                                    <label id={'fullName'} style={{width: '30%', color: 'black'}}>FullName :</label>
                                    <input id={'fullName'} placeholder={userDetail.fullName}
                                           onChange={(e) => handleInputChange(e, 'fullName')}
                                           style={{
                                               border: 'black',
                                               borderRadius: '5px',
                                               width: '80%', textAlign: 'center'
                                           }}/>
                                </div>
                                <div style={{marginLeft:'15%'}}>
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
                                <div style={{marginLeft:'15%'}}>
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
                                <div style={{marginLeft:'15%'}}>
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

                                <div style={{padding:'20px'}}>
                                    <button className="btn btn-success" style={{marginLeft:'40%',borderRadius: '5px',}} onClick={submit}>Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </> : <></>}
                    {active == 2 ? <>
                        <div className='row'>
                            <div className="col-md-10">hello</div>
                            <div className="col-md-1">bye</div>
                        </div>

                    </> : <></>}
                    {/*{active == 3 ? <>Updating</> : <></>}*/}
                </div>
            </div>
        </div>
    </>)
}


export default EditAccount;