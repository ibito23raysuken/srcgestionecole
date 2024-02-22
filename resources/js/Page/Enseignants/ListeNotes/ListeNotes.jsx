import React, { useRef } from "react";
import s from "./style.module.css";
import logo1 from "../../../assets/images/logo1.png";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";
import AddIcon from "@mui/icons-material/Add";

export default function ListeNotes(props) {
    const contentToPrint = useRef(null);
    let { "data-listenoteenseignants": data } = props;
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    return (
        <div className=" text-center">
            <div className="row p-5 m-5">
                <div className="col-lg-7">
                    <select
                        className="form-select mb-3"
                        aria-label="Selectioner examen"
                    >
                        <option selected>Selectioner un l'examen</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="row">
                        <div className="col-4">
                            <select
                                className="form-select mb-3"
                                aria-label="Selectioner un matiere"
                            >
                                <option selected>Selectioner un matiere</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <input
                                type="email"
                                className="form-control mb-3"
                                id="coefficients"
                                placeholder="Taper coefficient"
                            />
                        </div>
                        <div className="col-4">
                            <input
                                type="email"
                                className="form-control mb-3"
                                id="note"
                                placeholder="Taper note"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary mb-3" onClick={() => {}}>
                        <AddIcon />
                        ajouter
                    </button>
                </div>
                <div
                    className={`col-lg-5 d-flex flex-column align-items-center`}
                >
                    <button
                        className="btn btn-primary mb-3 w-50"
                        onClick={() => {}}
                    >
                        <PrintIcon />
                        Imprimer
                    </button>
                    <div className={` mb-3 ${s.customPageSize}`}>
                        <div className="text-end">
                            <img src={logo1} alt="Logo" className={s.logo} />
                        </div>
                        <div>
                            <div className="text-start">
                                <span className="fw-bold text-decoration-underline">
                                    NOM:
                                </span>
                                {data.eleve.nom}
                            </div>
                            <div className="text-start">
                                <span className="fw-bold text-decoration-underline">
                                    PRENOM:
                                </span>
                                {data.eleve.prenom}
                            </div>
                            <div className="text-start">
                                <span className="fw-bold text-decoration-underline">
                                    CLASSE:
                                </span>
                                {data.eleve.classe}
                            </div>
                            <div className="text-start">
                                <span className="fw-bold text-decoration-underline">
                                    NUMERO:
                                </span>
                                {data.eleve.id}
                            </div>
                            <div className="text-start">
                                <span className="fw-bold text-decoration-underline">
                                    Reference Eleve:
                                </span>
                                {data.eleve.ref_eleve}
                            </div>
                        </div>
                        <div className="mt-2">
                            <table className="table table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th scope="col">MATIERE</th>
                                        <th scope="col">Coefficient</th>
                                        <th scope="col">NOTE</th>
                                        <th scope="col">Appréciations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Francais</th>
                                        <td>2</td>
                                        <td>19/20</td>
                                        <td>Tres Bien</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5 className="text-decoration-underline">
                                Resultat
                            </h5>
                            <table className="table table-bordered text-center w-50  ">
                                <tbody>
                                    <tr>
                                        <th scope="row">Totale</th>
                                        <td>45/100</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Moyen</th>
                                        <td>12/20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rang</th>
                                        <td>5/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-end text-decoration-underline">
                            Signature:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
