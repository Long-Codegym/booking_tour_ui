import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ModalDetail from "./ModalDetail";
import useModal from "../components/useModal";

const ShowAcc = () => {
    const allAcc = useSelector(state => {
        return state.admin.admin.allAccount;
    })
    const {isShowing, toggle} = useModal();
    const [acc, setAcc] = useState([])
    useEffect(() => {

    }, []);

    const loadingData = (acc) => {
        setAcc(acc)
    }

    return (<>
        <div className="m-5">
            <table className="table">
                <thead>
                <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">PassWord</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Email</th>
                    {/*<th scope="col">Address</th>*/}
                    {/*<th scope="col">Balance</th>*/}
                    {/*<th scope="col">Role</th>*/}
                    {/*<th scope="col">Status</th>*/}
                    {/*<th scope="col">Active</th>*/}
                    {/*<th scope="col">Edit</th>*/}
                    <th scope="col">Action</th>

                </tr>
                </thead>
                <tbody>
                {allAcc.length > 0 && allAcc.map((acc) => (
                    <tr onClick={() => {
                        loadingData(acc)
                    }}>
                        <td scope="row">{acc.id}</td>
                        <td>{acc.username}</td>
                        <td>{acc.password}</td>
                        <td>{acc.fullName}</td>
                        <td>{acc.email}</td>
                        {/*<td>{acc.address}</td>*/}
                        {/*<td>{acc.balance}</td>*/}
                        {/*<td>{acc.role.name}</td>*/}
                        {/*<td>{acc.status.name}</td>*/}
                        {/*<td>{acc.isActive}</td>*/}
                        <td onClick={toggle}>Edit</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        {allAcc ? <ModalDetail isShowing={isShowing} hide={toggle} userDetail={acc}/> : <></>}

    </>)
}
export default ShowAcc;