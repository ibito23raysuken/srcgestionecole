import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Datepickers = (props) => {
    const { "data-datedenaisance": dateProp } = props;
    const defaultDate = dateProp !== null ? new Date(dateProp) : new Date();
    const [startDate, setStartDate] = useState(defaultDate);
    const currentYear = new Date().getFullYear();
    const years = range(1990, currentYear + 1, 1);

    const customFormat = "yyyy-MM-dd"; // Format de date désiré

    return (
        <DatePicker
            name="datedenaissance"
            className="form-control"
            dateFormat={customFormat}
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        {"<"}
                    </button>
                    <select
                        value={date.getFullYear()}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[date.getMonth()]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        {">"}
                    </button>
                </div>
            )}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
};

function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
}

export default Datepickers;
