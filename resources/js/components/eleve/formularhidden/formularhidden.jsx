import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

const FormulaireHidden = (props) => {
    let { "data-parents": parents, "data-eleve": eleve } = props;
    let statehidden;
    console.log(parents);
    if (eleve === null || eleve["nomdu" + parents] === null) {
        statehidden = false;
    } else {
        statehidden = true;
    }
    const [checked, setChecked] = useState(statehidden);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <input
                type="checkbox"
                className="btn-check"
                name={parents}
                id={parents}
                defaultChecked={checked}
                onChange={handleChange}
            />
            <label
                className="btn btn-outline-secondary "
                style={{ width: "300px" }}
                htmlFor={parents}
            >
                <strong className="mx-2">
                    Ajout Information sur
                    {parents === "pere"
                        ? " le père"
                        : parents === "mere"
                        ? " la mère"
                        : " le Tuteur"}
                </strong>
                <PlusCircle size={25} />
            </label>
            {checked && <FormulaireAafficher parents={parents} eleve={eleve} />}
        </>
    );
};

const FormulaireAafficher = ({ parents, eleve }) => {
    let nom;
    let prenom;
    let contact;
    let profession;
    if (eleve === null) {
    } else {
        if (parents === "pere") {
            nom = eleve.nomdupere;
            prenom = eleve.prenomdupere;
            profession = eleve.professiondupere;
            contact = eleve.contactdupere;
        } else if (parents === "mere") {
            nom = eleve.nomdumere;
            prenom = eleve.prenomdumere;
            profession = eleve.professiondumere;
            contact = eleve.contactdumere;
        } else {
            nom = eleve.nomdututeur;
            prenom = eleve.prenomdututeur;
            profession = eleve.professiondututeur;
            contact = eleve.contactdututeur;
        }
        console.log(nom + " " + prenom + " " + contact + " " + profession);
    }

    return (
        <>
            <hr className="hr" />
            <div className="container-fluid d-md-flex flex-wrap">
                <div className="col-md-6 mb-3">
                    <label htmlFor={`nomdu${parents}`} className="form-label">
                        Nom du {parents}
                    </label>
                    <input
                        type="text"
                        className="form-control mb-2 "
                        name={`nomdu${parents}`}
                        id={`nomdu${parents}`}
                        defaultValue={nom}
                    />
                </div>
                <div className="col-md-6 mb-3 px-4">
                    <label
                        htmlFor={`prenomdu${parents}`}
                        className="form-label"
                    >
                        Prenom du {parents}
                    </label>
                    <input
                        type="text"
                        className="form-control mb-2 "
                        name={`prenomdu${parents}`}
                        id={`prenomdu${parents}`}
                        defaultValue={prenom}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label
                        htmlFor={`professiondu${parents}`}
                        className="form-label"
                    >
                        Profession du {parents}
                    </label>
                    <input
                        type="text"
                        className="form-control mb-2 "
                        name={`professiondu${parents}`}
                        id={`professiondu${parents}`}
                        defaultValue={profession}
                    />
                </div>
                <div className="col-md-6 mb-3 px-4">
                    <label
                        htmlFor={`contactdu${parents}`}
                        className="form-label"
                    >
                        contact du {parents}
                    </label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        name={`contactdu${parents}`}
                        id={`contactdu${parents}`}
                        defaultValue={contact}
                    />
                </div>
                <hr className="hr" />
            </div>
        </>
    );
};

export default FormulaireHidden;
