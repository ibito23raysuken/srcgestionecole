import Checkbox from "@mui/material/Checkbox";
import React, { useState, useEffect } from "react";

export default function ListeMois(props) {
    const { "data-eleve": eleve, "data-parametre": parametre } = props;
    const [listemoiscocher, setListemoiscocher] = useState([]);
    const listemoisParametre = parametre[0].listemois
        .split(",")
        .map((mois) => mois.trim());
    const moisEleve = eleve.ecolages[eleve.ecolages.length - 1].mois;
    const [selectedMois, setSelectedMois] = useState(
        moisEleve.reduce((acc, mois) => {
            acc[mois] = true;
            return acc;
        }, {})
    );

    // Mettre à jour l'état lorsque la case à cocher est modifiée
    const handleCheckboxChange = (mois) => {
        setSelectedMois((prevState) => ({
            ...prevState,
            [mois]: !prevState[mois],
        }));
    };

    useEffect(() => {
        const updatedMoisEleve = Object.keys(selectedMois).filter(
            (mois) => selectedMois[mois]
        );
        setListemoiscocher(updatedMoisEleve);
    }, [selectedMois]);

    return (
        <div className="container">
            <div className="row ">
                <input
                    type="hidden"
                    name="moischequer"
                    value={listemoiscocher}
                />
                {listemoisParametre.map((mois) => (
                    <div key={mois} className="col-sm-6 col-md-4 col-lg-1">
                        <label>
                            <div>{mois}</div>
                            <Checkbox
                                checked={selectedMois[mois] || false}
                                onChange={() => handleCheckboxChange(mois)}
                            />
                            <div>
                                {selectedMois[mois] ? "Payer" : "Non Payer"}
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
