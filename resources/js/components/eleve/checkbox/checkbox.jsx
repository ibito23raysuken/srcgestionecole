import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox"; // Importez Checkbox entre accolades

export default function Checkboxs(props) {
    let {
        "data-name": name,
        "data-chequer": defaultChecked,
        "data-allmounthscolaire": allmounthscolaire,
    } = props;
    defaultChecked === null ? (defaultChecked = false) : "";
    const [checked, setChecked] = React.useState(defaultChecked);
    const [selectedMonths, setSelectedMonths] = useState([]);
    let months = [];
    const handleCheckboxChange = (month) => {
        if (selectedMonths.includes(month)) {
            // Si le mois est déjà sélectionné, le retirer de la liste
            setSelectedMonths(selectedMonths.filter((m) => m !== month));
        } else {
            // Sinon, l'ajouter à la liste
            setSelectedMonths([...selectedMonths, month]);
        }
    };
    allmounthscolaire != null
        ? (months = allmounthscolaire.listemois.split(","))
        : "";
    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(`Valeur de ${name} :`, event.target.checked);
    };

    return (
        <>
            <div>
                <input type="hidden" name={name} value="false" />
                {/* Utilisez Checkbox du framework Material-UI */}
                <Checkbox
                    value={checked}
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                />
                {name} de l'élève.
            </div>
            {checked && name === "Ecolage" && <Checkedmois parents={name} />}
        </>
    );

    function Checkedmois({ parents }) {
        return (
            <>
                <hr className="hr" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <p>Selection mois</p>
                            <input
                                type="hidden"
                                name="moischequer"
                                value={selectedMonths}
                            />
                            <div
                                className="container "
                                name="moischequer"
                                role="group"
                            >
                                <div
                                    className="row justify-content-center"
                                    role="group"
                                >
                                    {months.map((month) => (
                                        <div
                                            key={month}
                                            className="col-sm-6 col-md-4 col-lg-1 "
                                        >
                                            <label className="d-flex flex-column align-items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMonths.includes(
                                                        month
                                                    )}
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            month
                                                        )
                                                    }
                                                />
                                                {month}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
