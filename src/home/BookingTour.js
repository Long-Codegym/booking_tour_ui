import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBill, addTour, getAllCity, getAllSupplies, getToursById} from "../service/toursService";
import {DatePicker} from "antd";

const BookingTour = () => {
    const accountData = localStorage.getItem("account");
    let idAccount = null;
    if (accountData) {
        try {
            idAccount = JSON.parse(accountData).id;
        } catch (e) {
        }
    }
    const dispatch = useDispatch();
    const {id} = useParams()
    const [add,setAdd]=useState(false);
    useEffect(() => {
        dispatch(getToursById(id))
    }, [id])
    const tour = useSelector((state) => {
        return state.zone.zone.tour;
    });
    console.log(tour)
    const [selectedDate, setSelectedDate] = useState(null);
    const [people, setPeople] = useState(0);
    const handlePeople = (event) => {
        const p = parseInt(event.target.value);
        setPeople(p);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [bill, setBill] = useState({
        dateCreate: new Date(),
        dateStart: null,
        price: 0,
        total: 0,
        persons: 0,
        children: 0,
        note: '',
        numberPhone: '',
        address: '',
        fullName: '',
        tour: {
            id: ""
        },
        accountCC: {
            id: ""
        },
        accountUser: {
            id: ""
        },
        status: {
            id: ""
        },
        isActive: true,
    });

    const handleAddTour =(event) =>{
        event.preventDefault();
        setAdd(true);
        const price = tour.tour.price;
        const dateCreate = new Date();
        const dateStart = event.target.dateStart ? event.target.dateStart.value : '';
        const total = event.target.total ? event.target.total.value : '';
        const persons = event.target['persons'] ? event.target['persons'].value : '';
        const children = event.target['children'] ? event.target['children'].value : '';
        const note = event.target['note'] ? event.target['note'].value : '';
        const numberPhone = event.target.numberPhone ? event.target.numberPhone.value : '';
        const address = event.target['address'] ? event.target['address'].value : '';
        const fullName = event.target.fullName ? event.target.fullName.value : '';

        const updatedCreateTour = {
            ...bill,
            dateCreate,
            dateStart,
            price,
            total,
            persons,
            children,
            note,
            numberPhone,
            address,
            fullName,
            tour: {id:tour.tour.id },
            accountCC:{id: tour.tour.account.id} ,
            accountUser: { id: idAccount },
            status: {id: 4},
            isActive: true,
        };
        setBill(updatedCreateTour);
    };
    useEffect(() => {
        if(add){
            dispatch(addBill(bill));
            setAdd(false);
        }
    }, [bill]);
    console.log(bill)
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test3.css"/>
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test1.css"/>
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test2.css"/>
            <link rel="stylesheet" type="text/css" href="/css_create_tour/create_tour.css" />
            {tour && tour.tour &&
                <form className="row ma-rp10" onSubmit={(event)=>handleAddTour(event)}>

                    <div className="col-xl-8 pa-rp10">
                        <div className="one__booking one-one__booking mgb-20">
                            <div className="tit__booking d-flex justify-content-between align-items-center">
                                <h2>Thông tin tour</h2>
                            </div>
                            <div className="content__booking">
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="name-tour" className="custom-lbl">
                                            Tên Tour{" "}
                                            <em className="ml-1 text-info custom-text">
                                            </em>
                                        </label>
                                        <input type="text" className="form-control custom-input custom-place" id="name-tour" name="name-tour" placeholder="" required="" defaultValue=""
                                            readOnly
                                            value={tour.tour.name}
                                        />
                                        <div className="invalid-feedback">Tên tour</div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="hotel-tour" className="custom-lbl">
                                            Danh sách các dịch vụ
                                        </label>
                                        <select className="custom-select custom-input custom-place text-bule"
                                                id="hotel-tour" name="hotel-tour" required="">
                                            {tour.tour.supplies.map((ite,key)=>(
                                            <option value={ite.name}>{ite.name}</option>
                                            ))}

                                        </select>

                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="allday-tour" className="custom-lbl">
                                            Giá
                                        </label>
                                        <input
                                            className="custom-select custom-input custom-place"
                                            id="price"
                                            name="allday-tour"
                                            required=""
                                            readOnly
                                            value={tour.tour.price + "/1 người"}
                                        />

                                        {/*<div className="invalid-feedback">Vui lòng chọn số ngày đi</div>*/}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="allday-tour" className="custom-lbl">
                                            Giảm giá
                                        </label>
                                        <input
                                            className="custom-select custom-input custom-place"
                                            id="discount"
                                            name="allday-tour"
                                            required=""
                                            readOnly
                                            defaultValue={tour.tour.discount +" %" }
                                        />

                                        {/*<div className="invalid-feedback">Vui lòng chọn số ngày đi</div>*/}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="allday-tour" className="custom-lbl">
                                            Số ngày đi tour
                                        </label>
                                        <input
                                            className="custom-select custom-input custom-place"
                                            id="allday-tour"
                                            name="allday-tour"
                                            required=""
                                            readOnly
                                            value={tour.tour.tourTime}
                                        />

                                        {/*<div className="invalid-feedback">Vui lòng chọn số ngày đi</div>*/}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="exped-tour" className="custom-lbl">
                                            Phương tiện
                                        </label>
                                        <input
                                            className="custom-select custom-input custom-place"
                                            id="exped-tour"
                                            name="exped-tour"
                                            required=""
                                            data-gtm-form-interact-field-id={1}
                                            readOnly
                                            defaultValue={tour.tour.convenientWard}
                                        />

                                        {/*<div className="invalid-feedback">Vui lòng chọn phương tiện</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one__booking mgb-20">
                            <div className="tit__booking">
                                <h2>Chi tiết đặt Tour</h2>
                            </div>
                            <div className="content__booking">

                                <div className="form-row align-items-center">
                                    <div className="col-auto mb-3">
                                        <div className="form-check form-check-custom d-flex align-items-center">
                                            <label className="form-check-label mr-2">Số người</label>
                                            <select
                                                className="custom-select custom-input custom-place mr-2"
                                                id="persons"
                                                name="persons"
                                                required=""
                                                onChange={handlePeople}
                                            >
                                                <option value={0}>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                                <option value={11}>11</option>
                                                <option value={12}>12</option>
                                                <option value={13}>13</option>
                                                <option value={14}>14</option>
                                                <option value={15}>15</option>
                                                <option value={16}>16</option>
                                                <option value={17}>17</option>
                                                <option value={18}>18</option>
                                                <option value={19}>19</option>
                                                <option value={20}>20</option>
                                                <option value={21}>21</option>
                                                <option value={22}>22</option>
                                                <option value={23}>23</option>
                                                <option value={24}>24</option>
                                                <option value={25}>25</option>
                                                <option value={26}>26</option>
                                                <option value={27}>27</option>
                                                <option value={28}>28</option>
                                                <option value={29}>29</option>
                                                <option value={30}>30</option>
                                                <option value={31}>31</option>
                                                <option value={32}>32</option>
                                                <option value={33}>33</option>
                                                <option value={34}>34</option>
                                                <option value={35}>35</option>
                                                <option value={36}>36</option>
                                                <option value={37}>37</option>
                                                <option value={38}>38</option>
                                                <option value={39}>39</option>
                                                <option value={40}>40</option>
                                                <option value={41}>41</option>
                                                <option value={42}>42</option>
                                                <option value={43}>43</option>
                                                <option value={44}>44</option>
                                                <option value={45}>45</option>
                                            </select>
                                        </div>
                                        <div className="invalid-feedback">_vuilongchonsonguoi</div>
                                    </div>
                                    <div className="col-auto mb-3">
                                        <div className="form-check form-check-custom d-flex align-items-center">
                                            <label className="form-check-label mr-2">Trẻ nhỏ</label>
                                            <select
                                                className="custom-select custom-input custom-place mr-2"
                                                id="children"
                                                name="children"
                                            >
                                                <option value={0}>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                                <option value={11}>11</option>
                                                <option value={12}>12</option>
                                                <option value={13}>13</option>
                                                <option value={14}>14</option>
                                                <option value={15}>15</option>
                                                <option value={16}>16</option>
                                                <option value={17}>17</option>
                                                <option value={18}>18</option>
                                                <option value={19}>19</option>
                                                <option value={20}>20</option>
                                                <option value={21}>21</option>
                                                <option value={22}>22</option>
                                                <option value={23}>23</option>
                                                <option value={24}>24</option>
                                                <option value={25}>25</option>
                                                <option value={26}>26</option>
                                                <option value={27}>27</option>
                                                <option value={28}>28</option>
                                                <option value={29}>29</option>
                                                <option value={30}>30</option>
                                                <option value={31}>31</option>
                                                <option value={32}>32</option>
                                                <option value={33}>33</option>
                                                <option value={34}>34</option>
                                                <option value={35}>35</option>
                                                <option value={36}>36</option>
                                                <option value={37}>37</option>
                                                <option value={38}>38</option>
                                                <option value={39}>39</option>
                                                <option value={40}>40</option>
                                                <option value={41}>41</option>
                                                <option value={42}>42</option>
                                                <option value={43}>43</option>
                                                <option value={44}>44</option>
                                                <option value={45}>45</option>
                                                <option value={46}>46</option>
                                            </select>
                                        </div>
                                    </div>
                                    <em className="ml-1 text-info custom-text mb-3 none-12">
                                        (trẻ nhỏ &lt; 6 tuổi miễn phí)
                                    </em>
                                    <div className="col-auto mb-3">
                                        <div className="form-check form-check-custom d-flex align-items-center">
                                            <label className="form-check-label mr-2">Tổng giá tiền Tour</label>
                                            <input className="custom-select custom-input custom-place" id="total" name="exped-tour" required="" data-gtm-form-interact-field-id={1} readOnly
                                                value={ ((tour.tour.price)-((tour.tour.price/100)*tour.tour.discount))*people}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row align-items-center group-site">
                                    <div className="col-auto">
                                        <label className="custom-lbl">Ngày bắt đầu</label>
                                    </div>
                                    <div className="col-4 p-relative block-invalid">
                                        <div className="group-search abs form-control">
                                            <div className="group-search-content">
                                                <DatePicker  className="tourmaster-datepicker tourmaster-datepicker1" id="dateStart" name="dates" placeholderText="Chọn ngày đi" selected={selectedDate} onChange={handleDateChange} dateFormat="dd MM yyyy" showMonthYearPicker locale="vi" required/>

                                                <div className="invalid-feedback">Vui lòng chọn ngày đặt</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one__booking">
                            <div className="tit__booking">
                                <h2>Lưu ý</h2>
                            </div>
                            <div className="content__booking">
                                <p>
          <span style={{fontFamily: "tahoma,geneva,sans-serif"}}>
            <span style={{lineHeight: "1.8"}}>
              * Xin vui lòng nhập tên hành khách phải đúng tên như trong
              CMTND/Hộ chiếu (tên không dấu, có dấu cách giữa họ và tên).
              <br/>
              * Quý khách vui lòng mang đầy đủ giấy tờ tùy thân.
              <br/>
              * Hãy để lại thông tin chính xác để nhân viên của chúng tôi liên
              hệ lại cho bạn trong thời gian sớm nhất
              <br/>* Booking có giá trị khi được nhân viên xác nhận !
            </span>
          </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 pa-rp10">
                        <div className="fix-site" style={{position: "sticky", top: 80}}>
                            <div className="one__booking one__booking__right">
                                <div className="tit__booking">
                                    <h2>Thông tin liên lạc</h2>
                                </div>
                                <div className="content__booking">
                                    <div className="form-group">
                                        <input type="text" name="name-booking" className="form-control custom-input" id="fullName" required="" placeholder="Họ tên*"
                                               defaultValue={JSON.parse(accountData).fullName}/>
                                        <div className="invalid-feedback">Vui lòng nhập họ tên</div>
                                    </div>
                                    <div className="form-group">
                                        <input   type="text" name="numberPhone" className="form-control custom-input" id="numberPhone" required="" placeholder="Điện thoại*"
                                               pattern="[0-9]{10,}" title="Vui lòng nhập số điện thoại hợp lệ (ít nhất 10 chữ số)"/>
                                        <div className="invalid-feedback">Vui lòng nhập điện thoại</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email-booking" className="form-control custom-input" id="email-booking"
                                            required="" placeholder="Email*"
                                               defaultValue={JSON.parse(accountData).email}/>
                                        <div className="invalid-feedback">Vui lòng nhập email</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="address" className="form-control custom-input" id="address" required="" placeholder="Địa chỉ"
                                               defaultValue={JSON.parse(accountData).address}/>
                                        <div className="invalid-feedback">Vui lòng nhập địa chỉ</div>
                                    </div>
                                    <div className="form-group">
                                            <textarea type="text" rows={2} name="note" className="form-control custom-input" id="note" placeholder="Ghi chú" defaultValue={""}/>
                                    </div>
                                    <div className="botton-booking">
                                        <button className="btn-17">
                                <span className="text-container">
                                    <span className="text">Đặt Tour</span>
                                </span>
                                        </button>
                                        {/*<input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            }
        </>
    )
}
export default BookingTour;