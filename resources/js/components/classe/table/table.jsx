import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ListItem } from "../listitem/ListeItem";
import { Paginations } from "../../pagination/pagination";

function DatatablePage(props) {
    let { "data-classes": classes } = props;
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Nombre d'éléments par page

    const inputHandler = (e) => {
        setFilterText(e.target.value.toLowerCase());
        setCurrentPage(1); // Réinitialiser la page à la première lors de la recherche
    };
    console.log(classes);
    const filteredData = classes.filter((el) => {
        if (filterText === "") {
            return el;
        } else {
            return el.nomclasse.toLowerCase().includes(filterText);
        }
    });

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
                                            CLASSE
                                        </th>
                                        <th scope="col" className="col-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, id) => (
                                        <ListItem
                                            key={item.nomclasse + id}
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
