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
        <div className="m-5 p-5 d-flex ">
            <div className="row">
                <select
                    class="form-select"
                    aria-label="Selectioner un matierer"
                >
                    <option selected>Selectioner un matierer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="row">
                <div className="col-8">
                    <div class="card  p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div className="row">
                            <div className="col-3">
                                <select
                                    class="form-select"
                                    aria-label="Selectioner un matierer"
                                >
                                    <option selected>
                                        Selectioner un matierer
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="coefficients"
                                    placeholder="Taper coefficient"
                                />
                            </div>
                            <div className="col-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="note"
                                    placeholder="Taper note"
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => {}}
                        >
                            <AddIcon />
                            ajouter
                        </button>
                    </div>
                </div>
                <div className="container  col-4">
                    <div className="text-center mb-3 ms-2">
                        <button
                            className="btn btn-primary container"
                            onClick={() => {
                                handlePrint(null, () => contentToPrint.current);
                            }}
                        >
                            <PrintIcon />
                            Imprimer
                        </button>
                    </div>

                    <div className={s.customPageSize} ref={contentToPrint}>
                        <div className=" text-end">
                            <img
                                src={logo1}
                                alt="Logo"
                                className={`${s.logo} `}
                            />
                        </div>
                        <div>
                            <div>
                                <span className="fw-bold text-decoration-underline">
                                    NOM:
                                </span>
                                {data.eleve.nom}
                            </div>
                            <div>
                                <span className="fw-bold text-decoration-underline">
                                    PRENOM:
                                </span>
                                {data.eleve.prenom}
                            </div>
                            <div>
                                <span className="fw-bold text-decoration-underline">
                                    CLASSE:
                                </span>
                                {data.eleve.classe}
                            </div>
                            <div>
                                <span className="fw-bold text-decoration-underline">
                                    NUMERO:
                                </span>
                                {data.eleve.id}
                            </div>
                            <div>
                                <span className="fw-bold text-decoration-underline">
                                    Reference Eleve:
                                </span>
                                {data.eleve.ref_eleve}
                            </div>
                        </div>
                        <div>
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
