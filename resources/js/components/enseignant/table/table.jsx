import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ListItem from "../listeitem/listeitem";
import { Paginations } from "../../pagination/pagination";

function DatatablePage(props) {
    let { "data-enseignants": enseignants } = props;
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Nombre d'éléments par page

    const inputHandler = (e) => {
        setFilterText(e.target.value.toLowerCase());
        setCurrentPage(1); // Réinitialiser la page à la première lors de la recherche
    };
    console.log(enseignants);
    const filteredData = enseignants.filter((enseignant) => {
        if (filterText === "") {
            return true;
        } else {
            return (
                enseignant.nomenseignant.toLowerCase().includes(filterText) ||
                enseignant.prenomenseignant.toLowerCase().includes(filterText)
            );
        }
    });

    // Pagination
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="search mb-3">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                onChange={inputHandler}
                                fullWidth
                                label="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-1">
                                            ID
                                        </th>
                                        <th scope="col" className="col-1">
                                            Nom
                                        </th>
                                        <th scope="col" className="col-2">
                                            Prénom
                                        </th>
                                        <th scope="col" className="col-2">
                                            Classe
                                        </th>
                                        <th scope="col" className="col-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((enseignant, index) => (
                                        <ListItem
                                            key={
                                                enseignant.nomenseignant + index
                                            }
                                            item={enseignant}
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
                totalItems={filteredData.length}
                paginate={paginate}
            />
        </div>
    );
}

export default DatatablePage;
