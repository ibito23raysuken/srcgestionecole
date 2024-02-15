import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios"; // Import axios

const AlertDialog = ({ isOpen, onClose, onConfirm, item, data }) => {
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
            } catch (error) {}
        };

        fetchCsrfToken();
    }, []);

    // Fonction pour gérer la suppression
    const handleDelete = async () => {
        try {
            // Configuration de la requête DELETE avec le jeton CSRF
            const response = await axios.delete(`/${data}/${item.id}`, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            console.log(response.data);

            // Appeler la fonction de confirmation passée en props
            onConfirm();

            // Fermer la boîte de dialogue
            onClose();

            // Actualiser la page après la suppression réussie
            window.location.reload();
        } catch (error) {
            // Gérez les erreurs ici
            console.error(error);
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Confirmation de suppression"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Êtes-vous sûr de vouloir supprimer cet {data}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Annuler</Button>
                <Button onClick={handleDelete} autoFocus>
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertDialog;
