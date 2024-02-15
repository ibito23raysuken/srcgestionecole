import React from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ListeEtudiants(props) {
    let { "data-eleves": eleves } = props;
    return (
        <div className="m-5 p-5 ">
            <h2 className="text-center ">
                <strong>Liste de vos etudiants</strong>
            </h2>
            <table className="table table-striped table-hover table-bordered text-center ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {eleves.map((item, id) => (
                        <tr key={item.nom + id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.nom}</td>
                            <td>{item.prenom}</td>
                            <td>
                                <a
                                    type="button"
                                    className="btn btn-danger"
                                    href={`/notes/${item.id}`}
                                >
                                    <NoteAddIcon />
                                    INSERT NOTE
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a
                type="button"
                className="btn btn-primary"
                style={{ display: "d-flex", textAlign: "left" }}
                href="/"
            >
                <ArrowBackIcon />
                RETOUR
            </a>
        </div>
    );
}
