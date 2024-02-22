import Checkbox from "@mui/material/Checkbox";
import React, { useState, useEffect } from "react";

export default function ListeMois(props) {
    const { "data-eleve": eleve, "data-parametre": parametre } = props;
    const [selectmois, setSelectmois] = useState({}); // Utilisation de useState pour initialiser et mettre à jour selectmois
    const [moischecker, setMoischecker] = useState([]);

    useEffect(() => {
        const listemoisParametre = parametre[0].listemois
            .split(",")
            .map((mois) => mois.trim());
        const listemoiscocher = eleve.ecolages[eleve.ecolages.length - 1].mois;

        const updatedSelectmois = {};

        listemoisParametre.forEach((element) => {
            updatedSelectmois[element] = listemoiscocher.includes(element);
        });

        setSelectmois(updatedSelectmois); // Mise à jour de l'état selectmois
        setMoischecker(listemoiscocher); // Mettre à jour moischecker avec les mois cochés
    }, [eleve, parametre]); // Déclenchement de l'effet lorsque eleve ou parametre change

    const handleCheckboxChange = (mois) => {
        setSelectmois((prevState) => ({
            ...prevState,
            [mois]: !prevState[mois], // Inversion de la valeur de la case cochée/décochée
        }));

        // Mettre à jour moischecker avec les mois cochés
        if (!moischecker.includes(mois)) {
            setMoischecker((prevState) => [...prevState, mois]); // Ajouter le mois si absent
        } else {
            setMoischecker((prevState) => prevState.filter((m) => m !== mois)); // Retirer le mois s'il est déjà présent
        }
    };
    console.log(moischecker);
    return (
        <div className="container">
            <div className="row ">
                <input type="hidden" name="moischequer" value={moischecker} />
                {Object.keys(selectmois).map((mois) => (
                    <div key={mois} className="col-sm-6 col-md-4 col-lg-1">
                        <label>
                            <div>{mois}</div>
                            <Checkbox
                                checked={selectmois[mois]}
                                onChange={() => handleCheckboxChange(mois)}
                            />
                            <div>
                                {selectmois[mois] ? "Payer" : "Non Payer"}
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
