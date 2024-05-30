import { Button } from "@mui/material";
import { Folder2, PencilSquare, Trash } from "react-bootstrap-icons";
import React, { useState } from "react";
import AlertDialog from "../../modal/alertDialogs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function ListItem({ item }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        <>
            <tr>
                <th>{item.ref_eleve}</th>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.classe.nomclasse}</td>
                <td>{item.droit ? "payer" : "nonpayer"}</td>
                <td style={{ textAlign: "right" }}>
                    {item.ecolage ? "payer" : "non payer"}
                </td>
                <td className="d-flex flex-wrap">
                    <div className="mx-2 mb-2">
                        <Button
                            variant="contained"
                            color="success"
                            href={`/eleves/${item.id}`}
                        >
                            <Folder2 />
                            {isSmallScreen ? "" : "Show"}
                        </Button>
                    </div>
                    <div className="mx-2 mb-2">
                        <Button
                            variant="contained"
                            type="button"
                            color="primary"
                            href={`/eleves/${item.id}/edit`}
                        >
                            <PencilSquare />
                            {isSmallScreen ? "" : "Modifier"}
                        </Button>
                    </div>
                    <div className="mx-2 mb-2">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDelete}
                        >
                            <Trash />
                            {isSmallScreen ? "" : "Supprimer"}
                        </Button>
                    </div>
                </td>
            </tr>

            {/* Render the AlertDialog component */}
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleDeleteConfirmed}
                item={item}
                data="eleves" /// Pass the item to the AlertDialog component
            />
        </>
    );
}
