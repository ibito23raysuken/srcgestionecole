import { Button } from "@mui/material";
import { Folder2, PencilSquare, Trash, Hdd } from "react-bootstrap-icons";
import React, { useRef, useState, useEffect } from "react";
import AlertDialog from "../../modal/alertDialogs";
import axios from "axios"; // Import axios

function ListItemMatiere({ item }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleChange = async (event) => {
        setChecked(!checked);
        if (checked) {
            const id = event.target.id;
            const valeurInput = document.getElementById(
                `nommatiere_${id}`
            ).value;
            try {
                const response = await axios.put(`/matieres/${id}`, {
                    nommatiere: valeurInput,
                });
                console.log(response.data);
                onClose();
            } catch (error) {
                console.error(error);
            }
            window.location.reload();
        }
    };
    const handleDelete = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDeleteConfirmed = () => {
        console.log("Delete confirmed!");
    };

    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <td>
                    {checked ? (
                        <FormulaireAafficher matiere={item} />
                    ) : (
                        item.nommatiere
                    )}
                </td>
                <td className="d-flex flex-wrap">
                    <div className="mx-2 mb-2">
                        {checked ? (
                            <Button
                                variant="contained"
                                color="success"
                                className={`button1${item.id}`}
                                id={item.id}
                                defaultChecked={checked}
                                onClick={handleChange}
                            >
                                <Hdd /> SAVE
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                className={`button2${item.id}`}
                                id={item.id}
                                defaultChecked={checked}
                                onClick={handleChange}
                            >
                                <PencilSquare /> Modifier
                            </Button>
                        )}
                    </div>
                    <div className="mx-2 mb-2">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDelete}
                        >
                            <Trash /> Supprimer
                        </Button>
                    </div>
                </td>
            </tr>
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleDeleteConfirmed}
                item={item}
                data="matieres"
            />
        </>
    );
}
const FormulaireAafficher = ({ matiere }) => {
    return (
        <>
            <div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2 "
                        name={`nommatiere_${matiere.id}`}
                        id={`nommatiere_${matiere.id}`}
                        defaultValue={matiere.nommatiere}
                    />
                </div>
            </div>
        </>
    );
};

export default ListItemMatiere;
