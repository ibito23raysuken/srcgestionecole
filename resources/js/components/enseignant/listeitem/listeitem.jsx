import { Button } from "@mui/material";
import { Folder2, PencilSquare, Trash } from "react-bootstrap-icons";
import React, { useState, useEffect } from "react";
import AlertDialog from "../../modal/alertDialogs";
const ListItem = ({ item }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDelete = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDeleteConfirmed = () => {
        // Handle any additional logic after deletion confirmation
        console.log("Delete confirmed!");
    };

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.nomenseignant}</td>
            <td>{item.prenomenseignant}</td>
            <td>{item.classe.nomclasse}</td>
            <td className="d-flex flex-wrap">
                <div className="mx-2 mb-2">
                    <Button
                        variant="contained"
                        color="success"
                        href={`/enseignants/${item.id}`}
                        className="w-100 mb-2" // Ajout de la classe w-100 pour 100% de largeur
                    >
                        <Folder2 /> Show
                    </Button>
                </div>
                <div className="mx-2 mb-2">
                    <Button
                        variant="contained"
                        type="button"
                        color="primary"
                        href={`/enseignants/${item.id}/edit`}
                        className="w-100 mb-2" // Ajout de la classe w-100 pour 100% de largeur
                    >
                        <PencilSquare /> Modifier
                    </Button>
                </div>
                <div className="mx-2 mb-2">
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        className="w-100" // Ajout de la classe w-100 pour 100% de largeur
                    >
                        <Trash /> Supprimer
                    </Button>
                </div>
            </td>
            {/* Render the AlertDialog component */}
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleDeleteConfirmed}
                item={item}
                data="enseignants" // Pass the item to the AlertDialog component
            />
        </tr>
    );
};

export default ListItem;
