import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSupplies } from "../service/toursService";

const CreateTourTest = () => {
    const [tourTime, setTourTime] = useState(0);
    const [createTour, setCreateTour] = useState({
        // ... các trường thông tin khác
        TourSchedule: [],
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSupplies());
    }, []);

    const allSupplies = useSelector((state) => {
        return state.zone.zone.supplies;
    });

    const handleAddTour = (event) => {
        event.preventDefault();

        // Lấy giá trị tourTime từ trường input
        const tourTime = parseInt(event.target.tourTime.value);
        setTourTime(tourTime);

        // Tạo danh sách TourSchedule dựa trên giá trị tourTime
        const initialTourSchedule = Array.from({ length: tourTime }, () => ({
            day: "",
            content: "",
            img: "",
            start: "",
            morning: "",
            noon: "",
            afternoon: "",
            evening: "",
        }));

        // Tiếp tục xử lý thông tin khác
        // ...

        // Cập nhật state createTour với danh sách TourSchedule ban đầu
        setCreateTour({
            // ... các trường thông tin khác
            TourSchedule: initialTourSchedule,
        });

        // Tiếp tục xử lý logic lưu thông tin tour
    };

    const renderTourScheduleForms = () => {
        const tourScheduleForms = [];

        for (let i = 0; i < tourTime; i++) {
            tourScheduleForms.push(
                <div key={i}>
                    <h2>Tour Schedule {i + 1}</h2>
                    <label htmlFor={`day${i}`}>Day:</label>
                    <input type="text" id={`day${i}`} name={`day${i}`} />

                    <label htmlFor={`content${i}`}>Content:</label>
                    <input type="text" id={`content${i}`} name={`content${i}`} />

                    <label htmlFor={`img${i}`}>Image URL:</label>
                    <input type="text" id={`img${i}`} name={`img${i}`} />

                    <label htmlFor={`start${i}`}>Start:</label>
                    <input type="text" id={`start${i}`} name={`start${i}`} />

                    <label htmlFor={`morning${i}`}>Morning:</label>
                    <input type="text" id={`morning${i}`} name={`morning${i}`} />

                    <label htmlFor={`noon${i}`}>Noon:</label>
                    <input type="text" id={`noon${i}`} name={`noon${i}`} />

                    <label htmlFor={`afternoon${i}`}>Afternoon:</label>
                    <input type="text" id={`afternoon${i}`} name={`afternoon${i}`} />

                    <label htmlFor={`evening${i}`}>Evening:</label>
                    <input type="text" id={`evening${i}`} name={`evening${i}`} />
                </div>
            );
        }

        return tourScheduleForms;
    };

    return (
        <div>
            <h1 style={{ color: "#333" }}>Thông tin Tour</h1>
            <form onSubmit={handleAddTour}>
                <label htmlFor="tourTime">Thời gian Tour (ngày):</label>
                <input type="number" id="tourTime" name="tourTime" />

                {/* ... (các trường thông tin khác) */}
                <button className="btn-17">
                    <span className="text-container">
                        <span className="text">Thêm</span>
                    </span>
                </button>
            </form>

            {/* Hiển thị các TourSchedule forms dựa trên giá trị tourTime */}
            {tourTime > 0 && renderTourScheduleForms()}
        </div>
    );
};

export default CreateTourTest;
