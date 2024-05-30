import React, { useState, useEffect, forwardRef } from "react";
import s from "./style.module.css";
import logo1 from "../../../../assets/images/logo1.png";

const BulletinImp = forwardRef(({ data, isLoading, note, examen }, ref) => {
    const [totalCoefficient, setTotalCoefficient] = useState(0);
    const [totalNote, setTotalNote] = useState(0);
    const [rank, setrank] = useState(0);
    const [nbreleve, setnbreleve] = useState(0);

    const fetchAllNote = async (idexam) => {
        try {
            const response = await axios.get(`/exams/${idexam}`);
            const totalNotesParEleve = response.data.reduce((acc, note) => {
                acc[note.eleve_id] = (acc[note.eleve_id] || 0) + note.note;
                return acc;
            }, {});
            const sortedTotals = Object.entries(totalNotesParEleve).sort(
                (a, b) => b[1] - a[1]
            );

            let studentRank = 0; //
            sortedTotals.forEach(([eleve_id, total], index) => {
                console.log(typeof data.eleve.id);
                if (eleve_id === data.eleve.id.toString()) {
                    console.log(index);
                    setrank(index + 1);
                    setnbreleve(sortedTotals.length);
                }
            });

            console.log(
                `Élève ${data.eleve.id} est classé ${studentRank} sur ${sortedTotals.length} élèves.`
            );
        } catch (error) {
            console.error("Error fetching realtime data:", error);
        }
    };
    useEffect(() => {
        if (examen !== undefined) {
            fetchAllNote(examen);
        }

        if (note && note.length > 0) {
            const coefficientTotal = note.reduce(
                (total, item) => total + parseFloat(item.coefficient),
                0
            );
            const noteTotal = note.reduce(
                (total, item) => total + parseFloat(item.note),
                0
            );
            setTotalCoefficient(coefficientTotal);
            setTotalNote(noteTotal, totalNote);
        }
    }, [note]);
    function getAppreciation(note, coefficient) {
        const score = note;
        const notemax = coefficient * 10;

        if (score >= coefficient * 10 * 0.8) {
            return "Très bien";
        } else if (score >= coefficient * 10 * 0.7) {
            return "Bien";
        } else if (score >= coefficient * 10 * 0.6) {
            return "Assez bien";
        } else if (score >= coefficient * 10 * 0.5) {
            return "Passable";
        } else {
            return "Insuffisant";
        }
    }
    return (
        <div className={` mb-3 ${s.customPageSize}`} ref={ref}>
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
                    {data.classe.nomclasse}
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
                <div className="text-start">
                    <span className="fw-bold text-decoration-underline">
                        Examen:
                    </span>
                    Examen: {examen}
                </div>
            </div>
            <div className="mt-2">
                {isLoading ? (
                    <div>
                        <div colSpan="4">Loading...</div>
                    </div>
                ) : (
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
                            {note.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">
                                        {item.matiere.nommatiere}
                                    </th>
                                    <td>{item.coefficient}</td>
                                    <td>{item.note}</td>
                                    <td>
                                        {getAppreciation(
                                            item.note,
                                            item.coefficient
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <h5 className="text-decoration-underline">Resultat</h5>
                <table className="table table-bordered text-center w-50  ">
                    <tbody>
                        <tr>
                            <th scope="row">Totale</th>
                            <td>
                                {totalNote}/{totalCoefficient * 10}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Moyen</th>
                            <td>
                                {(
                                    (totalNote * 20) /
                                    (totalCoefficient * 10)
                                ).toFixed(2)}
                                /20
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Rang</th>
                            <td>
                                {rank}/{nbreleve}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-end text-decoration-underline">Signature:</div>
        </div>
    );
});

export default BulletinImp;
