import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {cancelBill, confirmBill, getAllBillByAcc} from "../service/toursService";

const BillCCTour = ()=> {
    const accountData = localStorage.getItem("account");
    const dispatch = useDispatch();
    const [idStatus, setIdStatus] = useState(null);
    const [idBill, setIdBill] = useState(null);
    const [idBillRecevied, setBillRecevied] = useState(null);
    let idAccount = null;
    if (accountData) {
        try {
            idAccount = JSON.parse(accountData).id;
        } catch (e) {
        }
    }

    useEffect(() => {
                dispatch(getAllBillByAcc({idStatus,idAccount}))
    }, [idStatus,idAccount])
    const billByIdAcc = useSelector((state) => {
        return state.zone.zone.allBillByIdAcc;
    });


    const [currentPage, setCurrentPage] = useState(1);

    const billsPerPage = 5;

    const indexOfLastBill = currentPage * billsPerPage;

    const indexOfFirstBill = indexOfLastBill - billsPerPage;

    const currentBills = billByIdAcc.slice(indexOfFirstBill, indexOfLastBill);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const confirmCancelBill = (idBill) => {
        setIdBill(idBill);
    };
    const confirmBillBills = (idBill1) => {
        setBillRecevied(idBill1)
    };
    useEffect(() => {
        dispatch(cancelBill(idBill)).then(() => {
            dispatch(getAllBillByAcc({ idStatus, idAccount }));
        });
        dispatch(confirmBill(idBillRecevied)).then(() => {
            dispatch(getAllBillByAcc({ idStatus, idAccount }));
        });
    }, [idBill, idBillRecevied, idStatus, idAccount]);

    return(
        <>
            <div className="white_box_tittle list_header" >
                <h3>Tất cả Tour đã đặt</h3>
                <select className="form-control gender " style={{width: 'auto'}} className="form-control gender" onChange={(e) => setIdStatus( e.target.value )}>
                    <option value="null">Trạng thái</option>
                    <option value="7">Đã hoàn thành</option>
                    <option value="4">Chờ xác nhận</option>
                    <option value="5">Đã nhận</option>
                    <option value="6">Đã hủy</option>
                </select>
            </div>
            <div className="transaction-table">
                <div className="table-responsive">
                    {/* {allBill && SON.parse(localStorage.getItem("account")).role.nameRole === "ROLE_CCDV" && */}
                    <table className="table table-striped table-bordered table-condensed table-hover">
                        <thead>
                        <tr>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Tên tour</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Bên cung cấp Tour</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Tên người đặt Tour</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Ngày đặt Tour</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Ngày bắt đầu</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Giá Tour 1 người</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Tổng tiền</th>
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Tình trạng</th>
                            {/*<th style={{fontSize :'14px', fontWeight: 'bold'}}>Xem chi tiết</th>*/}
                            <th style={{fontSize :'14px', fontWeight: 'bold'}}>Hoạt động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentBills.length > 0 &&
                            currentBills.map((item) => (
                                <tr key={item.id}>
                                    {/*<td onClick={() => {addUserChat(item.accountUser.username)}} style={{cursor: "pointer"}}>{item.accountUser.username}</td>*/}
                                    {/*<td onClick={() => {addUserChat(item.accountCCDV.username)}} style={{cursor: "pointer"}}>{item.accountCCDV.username}</td>*/}
                                    <td>{item.tour.name}</td>
                                    <td>{item.accountCC.fullName}</td>
                                    <td>{item.accountUser.fullName}</td>
                                    <td>
                                        {new Date(item.dateCreate).toLocaleString()}
                                    </td>
                                    <td>
                                        {new Date(item.dateStart).toLocaleString()}
                                    </td>
                                    <td>{item.price} / 1 người</td>
                                    <td>{item.total}</td>
                                    <td>
                                        {item.status.name === "wait_for_confirmation" ? "Chờ xác nhận" : item.status.name === "confirm" ? "Đã nhận" : item.status.name === "complete" ? "Hoàn thành" : "Đã hủy"}
                                    </td>
                                    {/*<td style={{width: "150px"}}>*/}
                                    {/*    <button className="action-button detail-button"*/}
                                    {/*            style={{width: "auto"}}*/}
                                    {/*        // onClick={() => openBillDetail(item)}*/}
                                    {/*    >*/}
                                    {/*        xem chi tiết*/}
                                    {/*    </button>*/}
                                    {/*</td>*/}
                                    <td className="actions" >
                                        {item.status.name === "wait_for_confirmation" && (
                                            <>
                                                <button
                                                        className="action-button cancel-button" style={{margin: "0 1px 0"}}
                                                        onClick={() => confirmCancelBill(item.id)}>
                                                    Hủy đơn
                                                </button>
                                                <button className="action-button confirm-button" style={{margin: "0 1px 0"}}
                                                        onClick={() => confirmBillBills(item.id)}>
                                                    Xác nhận
                                                </button>
                                            </>
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*phân trang*/}
            <div className="pagination-container">
                <ul className="pagination">
                    {currentPage === 1 ? (
                        <li className="disabled">
                            <button>&lt; Trang trước</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={() => paginate(currentPage - 1)}>&lt; Trang trước</button>
                        </li>
                    )}
                    {currentPage < Math.ceil(billByIdAcc.length / billsPerPage) ? (
                        <li>
                            <button onClick={() => paginate(currentPage + 1)}>Trang tiếp theo &gt;</button>
                        </li>
                    ) : (
                        <li className="disabled">
                            <button>Trang tiếp theo &gt;</button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
export default BillCCTour;