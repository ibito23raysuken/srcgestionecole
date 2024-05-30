import React, { useRef, useState, useEffect } from "react";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import s from "./style.module.css";

export default function Bulletinform({
    matieres,
    isLoading,
    note,
    idetudiant,
    fetchData,
    examen,
}) {
    const [error, setError] = useState("");
    const [editemode, seteditemode] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [editedCoefficient, setEditedCoefficient] = useState("");
    const [editedNote, setEditedNote] = useState("");
    const [editedMatiere, seteditedMatiere] = useState();
    const [editedExam, seteditedExam] = useState("");
    const handletable = (e, itemId) => {
        if (e.type === "click") {
            if (e.target.id == "delete") {
                handleDelete(itemId);
                fetchData(examen);
            } else if (e.target.id == "save") {
                seteditemode(!editemode);
                handleEdite(itemId);
                fetchData(examen);
            } else {
                if (!editemode) {
                    handleIniti(itemId);
                }
            }
        }
    };
    const handleIniti = async (idnote) => {
        setSelectedItemId(idnote);
        const item = note.find((item) => item.id === idnote);
        setEditedCoefficient(item.coefficient);
        setEditedNote(item.note);
        seteditedExam(item.exam);
        seteditedMatiere(item.matiere.id);
        seteditemode(!editemode);
    };

    const handleDelete = async (idnote) => {
        try {
            const response = await axios.delete(`/notes/${idnote}`);
            console.log(response.status);
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };
    const handleEdite = async (idnote) => {
        const examen = editedExam;
        const matiere = editedMatiere;
        const note = editedNote;
        const coefficient = editedCoefficient;
        const annee = new Date().getFullYear();
        const noteData = {
            matiere: matiere,
            note: note,
            coefficient: coefficient,
            idetudiant: idetudiant,
            exam: examen,
            annee: annee,
        };
        try {
            const response = await axios.put(`/notes/${idnote}`, noteData);
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }

        setSelectedItemId(null);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const exam = document.getElementById("exam").value;
        const matiere = document.getElementById("matiere").value;
        const note = document.getElementById("note").value;
        const coefficient = document.getElementById("coefficient").value;
        const annee = new Date().getFullYear();
        if (
            !Number.isInteger(+coefficient) &&
            !/^\d+(\.\d+)?$/.test(coefficient)
        ) {
            setError("Le coefficient doit être un nombre entier ou décimal.");
            return;
        }
        if (!Number.isInteger(+note) && !/^\d+(\.\d+)?$/.test(note)) {
            setError("La note doit être un nombre entier ou décimal.");
            return;
        }
        const noteData = {
            exam: exam,
            matiere: matiere,
            note: note,
            coefficient: coefficient,
            idetudiant: idetudiant,
            annee: annee,
        };

        try {
            const response = await axios.post("/notes", noteData);
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
        fetchData(exam);
    };
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <select
                        className="form-select mb-3"
                        aria-label="Selectioner un matiere"
                        id="matiere"
                    >
                        <option defaultValue={""}>
                            Selectioner un matiere
                        </option>
                        {matieres.map((matiere) => (
                            <option key={matiere.id} value={matiere.id}>
                                {matiere.nommatiere}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-4">
                    <input
                        type="email"
                        className="form-control mb-3"
                        id="coefficient"
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
            {error && <div className="alert alert-danger">{error}</div>}
            <button className="btn btn-primary mb-3" onClick={handleSubmit}>
                <AddIcon />
                ajouter
            </button>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Matiere</th>
                                <th>Coefficient</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {note &&
                                note.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={
                                            selectedItemId === item.id
                                                ? ""
                                                : s.redText
                                        }
                                        onClick={(e) => handletable(e, item.id)}
                                    >
                                        <td>
                                            {selectedItemId === item.id ? (
                                                <select
                                                    className="form-select"
                                                    aria-label="Selectioner un matiere"
                                                    id="matiere"
                                                    style={{ width: "200px" }}
                                                    defaultValue={
                                                        item.matiere.id
                                                    }
                                                    onChange={(e) => {
                                                        seteditedMatiere(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    {matieres.map((matiere) => (
                                                        <option
                                                            key={matiere.id}
                                                            value={matiere.id}
                                                        >
                                                            {matiere.nommatiere}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                item.matiere.nommatiere
                                            )}
                                        </td>
                                        <td>
                                            {selectedItemId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedCoefficient}
                                                    onChange={(e) =>
                                                        setEditedCoefficient(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                    style={{ width: "100px" }}
                                                />
                                            ) : (
                                                item.coefficient
                                            )}
                                        </td>
                                        <td>
                                            {selectedItemId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedNote}
                                                    onChange={(e) =>
                                                        setEditedNote(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                    style={{ width: "100px" }}
                                                />
                                            ) : (
                                                item.note
                                            )}
                                        </td>
                                        <td>
                                            {selectedItemId === item.id ? (
                                                <button
                                                    className="btn btn-success m-1 w-5"
                                                    id="save"
                                                >
                                                    <SaveIcon />
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-danger m-1 w-5"
                                                    id="delete"
                                                >
                                                    <DeleteIcon />
                                                    Delete
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
