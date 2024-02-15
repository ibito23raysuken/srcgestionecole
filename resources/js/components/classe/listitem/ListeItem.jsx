import { Button } from "@mui/material";
import { Folder2, PencilSquare, Trash, Hdd } from "react-bootstrap-icons";
import React, { useRef, useState, useEffect } from "react";
import AlertDialog from "../../modal/alertDialogs";
import axios from "axios"; // Import axios

export function ListItem({ item }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch("/api/csrf-token");

                if (!response.ok) {
                    throw new Error(`Erreur de réseau: ${response.status}`);
                }

                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du jeton CSRF :",
                    error
                );
            }
        };

        fetchCsrfToken();
    }, []);
    const handleChange = async (event) => {
        setChecked(!checked);
        if (checked) {
            const id = event.target.id;
            const valeurInput = document.getElementById(
                `nomclasse_${id}`
            ).value;
            try {
                // Configuration de la requête PUT avec le jeton CSRF
                const response = await axios.put(
                    `/classes/${id}`,
                    {
                        nomclasse: valeurInput,
                    },
                    {
                        headers: {
                            "X-CSRF-TOKEN": csrfToken,
                        },
                    }
                );
                console.log(response.data);
                onClose();
            } catch (error) {
                // Gérez les erreurs ici
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
        // Handle any additional logic after deletion confirmation
        console.log("Delete confirmed!");
    };

    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <td>
                    {checked ? (
                        <FormulaireAafficher classe={item} />
                    ) : (
                        item.nomclasse
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

            {/* Render the AlertDialog component */}
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleDeleteConfirmed}
                item={item}
                data="classes" /// Pass the item to the AlertDialog component
            />
        </>
    );
}
const FormulaireAafficher = ({ classe }) => {
    console.log(classe);
    return (
        <>
            <div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2 "
                        name={`nomclasse_${classe.id}`}
                        id={`nomclasse_${classe.id}`}
                        defaultValue={classe.nomclasse}
                    />
                </div>
            </div>
        </>
    );
};
