import React, { useState, useEffect } from "react";
import { Select } from "@mui/material";

const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
];

const Parametre = (props) => {
    let { "data-parametre": parametre } = props;
    const [anneeScolaire, setAnneeScolaire] = useState("");
    const [selectedMonths, setSelectedMonths] = useState({
        start: "",
        end: "",
    });

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setAnneeScolaire(getAnneeScolaire(currentYear));

        if (parametre !== null) {
            const listeMois = parametre.listemois.split(", ");
            setSelectedMonths({
                start: listeMois[0],
                end: listeMois[listeMois.length - 1],
            });
        }
    }, [parametre]);

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setSelectedMonths((prevMonths) => ({ ...prevMonths, [name]: value }));
    };

    const getAnneeScolaire = (currentYear) => {
        const nextYear = currentYear + 1;
        return `${currentYear}-${nextYear}`;
    };

    useEffect(() => {
        const generatedMonths = generateMonthList(
            selectedMonths.start,
            selectedMonths.end
        );
        setSelectedMonths((prevMonths) => ({
            ...prevMonths,
            generated: generatedMonths,
        }));
    }, [selectedMonths.start, selectedMonths.end]);

    const generateMonthList = (start, end) => {
        const startIdx = months.indexOf(start);
        const endIdx = months.indexOf(end);

        if (startIdx <= endIdx) {
            const endIdxWithNextMonth = endIdx === 11 ? endIdx + 2 : endIdx + 1;
            return months.slice(startIdx, endIdxWithNextMonth).join(", ");
        } else {
            const monthsBeforeEnd = months.slice(0, endIdx + 1);
            const monthsAfterStart = months.slice(startIdx);
            const mergedMonths = monthsAfterStart.concat(monthsBeforeEnd);
            return mergedMonths.join(", ");
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="annescolaire" className="form-label">
                    Année scolaire
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="annescolaire"
                    id="annescolaire"
                    value={anneeScolaire}
                    onChange={(e) => setAnneeScolaire(e.target.value)}
                />
                <hr />
                <div className="row g-3">
                    <div className="col-md-5">
                        <label htmlFor="startMonth" className="form-label">
                            Début du mois
                        </label>
                        <div>
                            <Select
                                id="startMonth"
                                className="form-control"
                                name="start"
                                onChange={handleSelectChange}
                                value={selectedMonths.start}
                                native
                            >
                                <option value="">Sélectionnez un mois</option>
                                {months.map((month, index) => (
                                    <option key={index} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-md-2 text-center">
                        <span>à</span>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="endMonth" className="form-label">
                            Fin du mois
                        </label>
                        <Select
                            id="endMonth"
                            className="form-control"
                            name="end"
                            onChange={handleSelectChange}
                            value={selectedMonths.end}
                            native
                        >
                            <option value="">Sélectionnez un mois</option>
                            {months.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </Select>
                        <input
                            type="hidden"
                            name="listemois"
                            value={selectedMonths.generated}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-danger btn-block" type="submit">
                    Enregistrer paramètre
                </button>
            </div>
        </div>
    );
};

export default Parametre;
