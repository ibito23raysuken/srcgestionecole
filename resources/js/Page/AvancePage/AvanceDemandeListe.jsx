import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Paginations } from "../../components/pagination/pagination";
import ItemAvanceDemande from "../../components/ListeAvanceDemande/ItemAvanceDemande";

export default function AvanceDemandeListe(props) {
    let { "data-listeDemandeAvance": listeDemandeAvance } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Nombre d'éléments par page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="text-center mt-5">
            <h2>
                <strong>Liste de vos demande</strong>
            </h2>
            <a type="button" className="btn btn-danger " href="/demandes/send">
                <AddCircleOutlineIcon />
                <i className="fas fa-question-circle"></i> Envoyer une demande
            </a>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-1">
                                            Avance
                                        </th>
                                        <th scope="col" className="col-2">
                                            Date
                                        </th>
                                        <th scope="col" className="col-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listeDemandeAvance.map((item, id) => (
                                        <ItemAvanceDemande
                                            item={item}
                                            key={
                                                id +
                                                item.enseignant.nomenseignant
                                            }
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Paginations
                currentPage={currentPage}
                pageSize={pageSize}
                paginate={paginate}
            />
        </div>
    );
}
