import ReactDOM from 'react-dom';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

const ModalDetail = ({isShowing, hide, userDetail}) => {
    const [account, setAccount] = useState(userDetail)
    const allRole = useSelector(state => {
        return state.admin.admin.allRole;
    })
    const allStatus = useSelector(state => {
        return state.admin.admin.allStatus;
    })
    const idAdmin = JSON.parse(localStorage.getItem("account")).id;
    const navigate = useNavigate();
    const handleInputChange = (e, field) => {
        const newValue = e.target.value.trim();
        setAccount({
            ...userDetail,
            [field]: newValue
        });
    };
    const submit = () => {
        axios.post(`http://localhost:8080/accounts/editAccount?id=${idAdmin}`, account).then(data=>{
            console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: data.data.message
            });
        });
        navigate("/home_admin")
    }

    useEffect(() => {
        console.log(account)
    }, []);
    return isShowing ? ReactDOM.createPortal(<>
            <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{userDetail.username}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div class="col-md-4">
                                        <img src={userDetail.avatar} style={{width: '110%'}} />
                                    </div>
                                    <div className="col-md-8">
                                        <p>Username :{userDetail.username} </p>
                                        <div>
                                            <label id={'password'} style={{width: '30%'}}>Password :</label>
                                            <input id={'password'} placeholder={userDetail.password}
                                                   onChange={(e) => handleInputChange(e, 'password')}
                                                   style={{
                                                       border: 'none',
                                                       borderRadius: '5px',
                                                       boxShadow: '0 0 5px rgba(0,0,0,0)',
                                                       width: '60%'
                                                   }}/>
                                        </div>
                                        <div>
                                            <label id={'fullName'} style={{width: '30%'}}>FullName :</label>
                                            <input id={'fullName'} placeholder={userDetail.fullName}
                                                   onChange={(e) => handleInputChange(e, 'fullName')}
                                                   style={{
                                                       border: 'none',
                                                       borderRadius: '5px',
                                                       boxShadow: '0 0 5px rgba(0,0,0,0)',
                                                       width: '60%'
                                                   }}/>
                                        </div>
                                        <div>
                                            <label id={'email'} style={{width: '30%'}}>Email :</label>
                                            <input id={'email'} placeholder={userDetail.email}
                                                   onChange={(e) => handleInputChange(e, 'email')}
                                                   style={{
                                                       border: 'none',
                                                       borderRadius: '5px',
                                                       boxShadow: '0 0 5px rgba(0,0,0,0)',
                                                       width: '60%'
                                                   }}/>
                                        </div>
                                        <div>
                                            <label id={'address'} style={{width: '30%',}}>Address :</label>
                                            <input id={'address'} placeholder={userDetail.address}
                                                   onChange={(e) => handleInputChange(e, 'address')}

                                                   style={{
                                                       border: 'none',
                                                       borderRadius: '5px',
                                                       boxShadow: '0 0 5px rgba(0,0,0,0)',
                                                       width: '60%'
                                                   }}/>
                                        </div>
                                        <div>
                                            <label id={'balance'} style={{width: '30%'}}>Balance :</label>
                                            <input id={'balance'} placeholder={userDetail.balance}
                                                   onChange={(e) => handleInputChange(e, 'balance')}
                                                   style={{
                                                       border: 'none',
                                                       borderRadius: '5px',
                                                       boxShadow: '0 0 5px rgba(0,0,0,0)',
                                                       width: '60%'
                                                   }}/>
                                        </div>
                                        <div className="input-group mb-3" style={{borderRadius: '6px'}}>
                                            <div className="input-group-prepend" style={{width: '30%',}}>
                                                <label className="input-group-text" htmlFor="Role">Role</label>
                                            </div>
                                            <select className="custom-select" id="Role"
                                                    onChange={(e) => handleInputChange(e, 'role')}
                                                    style={{width: '60%', borderRadius: '6px'}}>
                                                {allRole.length > 0 && allRole.map((role) => (
                                                        role.id === userDetail.role.id ?
                                                            <option value={role.id} selected>{role.name}</option> :
                                                            <option value={role.id}>{role.name}</option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend" style={{width: '30%'}}>
                                                <label className="input-group-text" htmlFor="Status">Status</label>
                                            </div>
                                            <select className="custom-select" id="Status"
                                                    onChange={(e) => handleInputChange(e, 'status')}
                                                    style={{width: '60%', borderRadius: '6px'}}>
                                                {allStatus.length > 0 && allStatus.map((status) => (
                                                        status.id === userDetail.status.id ?
                                                            <option value={status} selected>{status.name}</option> :
                                                            <option value={status}>{status.name}</option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>còn upload img</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={submit}>Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={hide}>Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>, document.body
    ) : null;


}
export default ModalDetail;