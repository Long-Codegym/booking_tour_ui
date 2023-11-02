import React, {useState} from "react";

const BookingTour =()=>{
    const [bill, setBill] = useState({
        dateCreate: new Date(),
        dateStart: null,
        dateEnd: null,
        price: 0,
        total: 0,
        persons: 0,
        children: 0,
        note: '',
        numberPhone: '',
        address: '',
        fullName: '',
        tour: null,
        accountCC: null,
        accountUser: null,
        status: null,
        isActive: false,
    });
    return(
        <>
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test3.css" />
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test1.css" />
            <link rel="stylesheet" type="text/css" href="/css_bookingtour/test2.css" />
            <div className="row ma-rp10">
                <div className="col-xl-8 pa-rp10">
                    <div className="one__booking one-one__booking mgb-20">
                        <div className="tit__booking d-flex justify-content-between align-items-center">
                            <h2>Thông tin tour</h2>
                            {/*<div className="input-group-prepend">*/}
                            {/*    <button*/}
                            {/*        className="btn btn-light dropdown-toggle custom-btn"*/}
                            {/*        type="button"*/}
                            {/*        data-toggle="dropdown"*/}
                            {/*        aria-haspopup="true"*/}
                            {/*        aria-expanded="false"*/}
                            {/*    >*/}
                            {/*        Tour theo yêu cầu*/}
                            {/*    </button>*/}
                            {/*    /!*<div className="dropdown-menu">*!/*/}
                            {/*    /!*    <a className="dropdown-item" href="booking">*!/*/}
                            {/*    /!*        Tour theo yêu cầu*!/*/}
                            {/*    /!*    </a>*!/*/}
                            {/*    /!*    <a className="dropdown-item" href="tour">*!/*/}
                            {/*    /!*        Tour thông thường*!/*/}
                            {/*    /!*    </a>*!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*</div>*/}
                        </div>
                        <div className="content__booking">
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="name-tour" className="custom-lbl">
                                        Tên Tour{" "}
                                        <em className="ml-1 text-info custom-text">
                                        </em>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control custom-input custom-place"
                                        id="name-tour"
                                        name="name-tour"
                                        placeholder=""
                                        required=""
                                        defaultValue=""
                                        readOnly
                                    />
                                    <div className="invalid-feedback">Tên tour</div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="hotel-tour" className="custom-lbl">
                                        Danh sách các dịch vụ
                                    </label>
                                    <select className="custom-select custom-input custom-place text-bule" id="hotel-tour" name="hotel-tour" required="">
                                        <option value={1}>★</option>

                                    </select>
                                    {/*<div className="invalid-feedback">Vui lòng chọn khách sạn</div>*/}
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
                                    />

                                    {/*<div className="invalid-feedback">Vui lòng chọn phương tiện</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="one__booking mgb-20">
                        <div className="tit__booking">
                            <h2>Chi tiết tour</h2>
                        </div>
                        <div className="content__booking">
                            {/*<div className="form-row align-items-center m-0 mb-3">*/}
                            {/*    <label className="custom-lbl d-flex align-items-center">*/}
                            {/*        Mã booking*/}
                            {/*        <div*/}
                            {/*            className="alert alert-info mb-0 ml-2 custom-alert"*/}
                            {/*            role="alert"*/}
                            {/*        >*/}
                            {/*            BPT02112023101*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*    <em className="ml-1 text-info custom-text">*/}
                            {/*        (Quý khách vui lòng nhớ số booking để tiện cho các giao dịch sau*/}
                            {/*        này)*/}
                            {/*    </em>*/}
                            {/*    <input*/}
                            {/*        type="hidden"*/}
                            {/*        name="mabooking"*/}
                            {/*        id="mabooking"*/}
                            {/*        defaultValue="BPT02112023101"*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <div className="form-row align-items-center">
                                {/* <div class="col-auto mb-3">
                  <label for="code-tour" class="custom-lbl">Số lượng khách</label>
              </div> */}
                                <div className="col-auto mb-3">
                                    <div className="form-check form-check-custom d-flex align-items-center">
                                        <label className="form-check-label mr-2">Số người</label>
                                        <select
                                            className="custom-select custom-input custom-place mr-2"
                                            id="peo18-tour"
                                            name="peo18-tour"
                                            required=""
                                        >
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
                                            id="peo182-tour"
                                            name="peo182-tour"
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
                                    (trẻ nhỏ &lt; 6 tuổi)
                                </em>
                            </div>
                            <div className="form-row align-items-center group-site">
                                <div className="col-auto">
                                    <label className="custom-lbl">Ngày đặt tour</label>
                                </div>
                                <div className="col-4 p-relative block-invalid">
                                    <div className="group-search abs form-control">
                                        <div className="group-search-content">
                                            <input
                                                className="tourmaster-datepicker tourmaster-datepicker1 hasDatepicker"
                                                id="dates"
                                                name="dates"
                                                type="text"
                                                placeholder="Chọn ngày đi"
                                                data-date-format="dd MM yyyy"
                                                readOnly=""
                                                required=""
                                            />
                                            <div className="invalid-feedback">Vui lòng chọn ngày đặt</div>
                                        </div>
                                        <div className="group-search-icon">
                                            <img src="/css_bookingtour/date.png" alt="Tìm kiếm" />
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
          <span style={{ fontFamily: "tahoma,geneva,sans-serif" }}>
            <span style={{ lineHeight: "1.8" }}>
              * Xin vui lòng nhập tên hành khách phải đúng tên như trong
              CMTND/Hộ chiếu (tên không dấu, có dấu cách giữa họ và tên).
              <br />
              * Quý khách vui lòng mang đầy đủ giấy tờ tùy thân.
              <br />
              * Hãy để lại thông tin chính xác để nhân viên của chúng tôi liên
              hệ lại cho bạn trong thời gian sớm nhất
              <br />* Booking có giá trị khi được nhân viên xác nhận !
            </span>
          </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 pa-rp10">
                    <div className="fix-site" style={{ position: "sticky", top: 80 }}>
                        <div className="one__booking one__booking__right">
                            <div className="tit__booking">
                                <h2>Thông tin liên lạc</h2>
                            </div>
                            <div className="content__booking">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name-booking"
                                        className="form-control custom-input"
                                        id="name-booking"
                                        required=""
                                        placeholder="Họ tên*"
                                    />
                                    <div className="invalid-feedback">Vui lòng nhập họ tên</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="phone-booking"
                                        className="form-control custom-input"
                                        id="phone-booking"
                                        required=""
                                        placeholder="Điện thoại*"
                                    />
                                    <div className="invalid-feedback">Vui lòng nhập điện thoại</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email-booking"
                                        className="form-control custom-input"
                                        id="email-booking"
                                        required=""
                                        placeholder="Email*"
                                    />
                                    <div className="invalid-feedback">Vui lòng nhập email</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="address-booking"
                                        className="form-control custom-input"
                                        id="address-booking"
                                        required=""
                                        placeholder="Địa chỉ"
                                    />
                                    <div className="invalid-feedback">Vui lòng nhập địa chỉ</div>
                                </div>
                                <div className="form-group">
            <textarea
                type="text"
                rows={2}
                name="note-booking"
                className="form-control custom-input"
                id="note-booking"
                required=""
                placeholder="Ghi chú"
                defaultValue={""}
            />
                                </div>
                                <div className="botton-booking">
                                    <input
                                        type="submit"
                                        name="submit-booking"
                                        className="btn btn-primary"
                                        defaultValue="Đặt tour"
                                    />
                                    <input
                                        type="hidden"
                                        name="recaptcha_response"
                                        id="recaptchaResponse"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BookingTour;