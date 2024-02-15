import { useState } from "react";
import TextField from "@mui/material/TextField";
import React from "react";
import ListItemMatiere from "../listitem/listItemMatiere";

import { Paginations } from "../../pagination/pagination";

function DatatablePage(props) {
    let { "data-matieres": listematiere } = props;
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Nombre d'éléments par page

    const inputHandler = (e) => {
        setFilterText(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const filteredData = listematiere.filter((el) => {
        if (filterText === "") {
            return el;
        } else {
            return el.nommatiere.toLowerCase().includes(filterText);
        }
    });
    console.log(filteredData);
    // Pagination
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container ">
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
                    <div className="col-12 ">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-1">
                                            #
                                        </th>
                                        <th scope="col" className="col-1">
                                            Matiere
                                        </th>
                                        <th scope="col" className="col-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, id) => (
                                        <ListItemMatiere
                                            key={item.nommatiere + id}
                                            item={item}
                                        />
                                    ))}
                                </tbody>
                            </table>
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
        </div>
    );
}

export default DatatablePage;
