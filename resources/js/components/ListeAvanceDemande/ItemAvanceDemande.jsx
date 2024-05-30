import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "../modal/AlertDialogueBase";

export default function ItemAvanceDemande({ item }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const handleDialogClose = () => {
        setDialogOpen(false);
    };
    const handleDelete = () => {
        setDialogOpen(true);
    };
    async function toggleDelete(e) {
        try {
            const response = await axios.delete(`/demandes/destroy/${item.id}`);
        } catch (error) {
            console.error(error);
        }
        e.stopPropagation();
        window.location.reload();
    }
    useEffect(() => {});
    return (
        <>
            <tr>
                <td>{item.avance}</td>
                <td>{item.dateavance}</td>
                <td>{item.statut} </td>
                <td>
                    <DeleteIcon
                        fontSize="large"
                        onClick={handleDelete}
                        sx={{
                            "&:hover": {
                                color: "red",
                            },
                            cursor: "pointer",
                        }}
                    />
                </td>
            </tr>
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                deleted_data={"demande d'avance"}
                onClickAccept={toggleDelete}
            />
        </>
    );
}
