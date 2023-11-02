import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { addTour, getAllCity, getAllSupplies } from "../service/toursService";

const CreateTour = () => {
    const accountData = localStorage.getItem("account");
    const [tourTimes, setTourTime] = useState(0);
    const [imageURL, setImageURL] = useState("");
    const [add,setAdd]=useState(false);
    let idAccount = null;

    if (accountData) {
        try {
            idAccount = JSON.parse(accountData).id;
        } catch (e) { }
    }

    const dispatch = useDispatch();

    const allSupplies = useSelector((state) => {
        return state.zone.zone.supplies;
    });
    const allCity = useSelector((state) => {
        return state.zone.zone.city;
    });
    const [tourSchedule, setTourSchedule] = useState([
        {
            day: "",
            content: "",
            img: "",
            start: "",
            morning: "",
            noon: "",
            afternoon: "",
            evening: "",
        }
    ]);

    const [createTour, setCreateTour] = useState({
        name: null,
        price: "",
        convenientWard: "",
        tourTime: null,
        discount: null,
        account: {
            id: "",
        },
        img: "",
        describes: "",
        city: {
            id: "",
        },
        supplies: [
            {
                id: "",
            },
        ],
        isActive: true,
    });

    const handleTourTimeChange = (event) => {
        const newTourTime = parseInt(event.target.value, 10);
        setTourTime(newTourTime);
    };
    const [obj, setObj] = useState({
        tour: createTour,
        tourSchedules: tourSchedule
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };

    const handleAddTour = (event) => {
        event.preventDefault();
        setAdd(true);
        const name = event.target.name.value;
        const price = event.target.price.value;
        const convenientWard = event.target.convenientWard.value;
        const tourTime = tourTimes;
        const discount = event.target.discount.value;
        const describes = event.target.describes.value;
        const cityId = event.target.city.value;

        const supplies = Array.from(event.target.supplies)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        const imgFile = event.target.img.files[0];
        if (imgFile) {
            const imgPath = `/img_demo/${imgFile.name}`;
            const imgURL = process.env.PUBLIC_URL + imgPath;

            const updatedCreateTour = {
                ...createTour,
                name,
                price,
                convenientWard,
                tourTime,
                discount,
                account: { id: idAccount },
                img: imgURL,
                describes,
                city: { id: cityId },
                supplies,
                isActive: true,
            };

            const tourSchedule = Array.from({ length: tourTimes }).map((_, i) => ({
                day: event.target[`TourSchedule[${i}].day`].value,
                content: event.target[`TourSchedule[${i}].content`].value,
                img: event.target[`TourSchedule[${i}].img`].value,
                start: event.target[`TourSchedule[${i}].start`].value,
                morning: event.target[`TourSchedule[${i}].morning`].value,
                noon: event.target[`TourSchedule[${i}].noon`].value,
                afternoon: event.target[`TourSchedule[${i}].afternoon`].value,
                evening: event.target[`TourSchedule[${i}].evening`].value,
            }));

            setCreateTour(updatedCreateTour);
            setTourSchedule(tourSchedule);
            setObj({
                tour: updatedCreateTour,
                tourSchedules: tourSchedule
            });

        } else {
            console.error("Vui lòng chọn một hình ảnh.");
        }
    };


    useEffect(() => {
        dispatch(getAllSupplies());
        dispatch(getAllCity());
        if(add){
            console.log(obj);
            dispatch(addTour(obj));
            setAdd(false);
        }
    }, [obj]);

    const renderTourScheduleForms = () => {
        const tourScheduleForms = [];

        for (let i = 0; i < tourTimes; i++) {
            tourScheduleForms.push(
                <td key={i}>
                    <h2>Lịch trình ngày {i + 1}</h2>
                    <label htmlFor={`TourSchedule[${i}].day`}>Day:</label>
                    <input type="text" id={`TourSchedule[${i}].day`} name={`TourSchedule[${i}].day`} />

                    <label htmlFor={`TourSchedule[${i}].content`}>Content:</label>
                    <input type="text" id={`TourSchedule[${i}].content`} name={`TourSchedule[${i}].content`} />

                    <label htmlFor={`TourSchedule[${i}].img`}>Image URL:</label>
                    <input type="text" id={`TourSchedule[${i}].img`} name={`TourSchedule[${i}].img`} />

                    <label htmlFor={`TourSchedule[${i}].start`}>Start:</label>
                    <input type="text" id={`TourSchedule[${i}].start`} name={`TourSchedule[${i}].start`} />

                    <label htmlFor={`TourSchedule[${i}].morning`}>Morning:</label>
                    <input type="text" id={`TourSchedule[${i}].morning`} name={`TourSchedule[${i}].morning`} />

                    <label htmlFor={`TourSchedule[${i}].noon`}>Noon:</label>
                    <input type="text" id={`TourSchedule[${i}].noon`} name={`TourSchedule[${i}].noon`} />

                    <label htmlFor={`TourSchedule[${i}].afternoon`}>Afternoon:</label>
                    <input type="text" id={`TourSchedule[${i}].afternoon`} name={`TourSchedule[${i}].afternoon`} />

                    <label htmlFor={`TourSchedule[${i}].evening`}>Evening:</label>
                    <input type="text" id={`TourSchedule[${i}].evening`} name={`TourSchedule[${i}].evening`} />
                </td>
            );
        }

        return tourScheduleForms;
    };


    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css_create_tour/create_tour.css" />
            <h1 style={{ color: "#333" }}>Thông tin Tour</h1>
            <form onSubmit={(event)=>handleAddTour(event)}>
                <table>
                    <td>
                        <label htmlFor="name">Tên Tour:</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="price">Giá:</label>
                        <input type="number" id="price" name="price" />

                        <label htmlFor="convenientWard">Phương tiện:</label>
                        <input type="text" id="convenientWard" name="convenientWard" />

                        <label htmlFor="tourTime">Thời gian Tour (ngày):</label>
                        <input type="number" id="tourTime" name="tourTime" onChange={handleTourTimeChange} />

                        {/*<label htmlFor="schedule">Lịch trình:</label>*/}
                        {/*<textarea id="schedule" name="schedule" defaultValue={""} />*/}

                        {/*<label htmlFor="bookings">Số lượt đặt:</label>*/}
                        {/*<input type="number" id="bookings" name="bookings" />*/}
                    </td>
                    <td>
                        <label htmlFor="discount">Giảm giá:</label>
                        <input type="number" id="discount" name="discount" />

                        <label htmlFor="img">Hình ảnh:</label>
                        <input type="file" id="img" name="img" accept="image/png, image/jpeg, image/jpg" multiple="multiple" onChange={handleImageUpload} />

                        <label htmlFor="city">Thành phố:</label>
                        <select id="city" name="city">
                            {allCity && allCity.map((item, key) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                        <label htmlFor="supplies">Dịch vụ:</label>
                        <div id="supplies">
                            {allSupplies &&
                                allSupplies.map((item, key) => (
                                    <label>
                                        <input type="checkbox" name="supplies" value={item.id} />
                                        {item.name}
                                    </label>
                                ))}
                        </div>
                        <label htmlFor="describes">Mô tả:</label>
                        <textarea id="describes" name="describes" defaultValue={""} />
                    </td>
                    {tourTimes > 0 && renderTourScheduleForms()}
                    <tr>
                        <td colspan={2 + tourTimes} style={{ textAlign: "center" }}>
                            <button className="btn-17">
                                <span className="text-container">
                                    <span className="text">Thêm</span>
                                </span>
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
};

export default CreateTour;
