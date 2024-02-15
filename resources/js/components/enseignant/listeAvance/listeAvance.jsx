import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Table from "@mui/joy/Table";
import ListItemAvance from "../listeItemAvance/listeItemAvance";
import Alert from "@mui/material/Alert";

export default function ShowAvanceliste({ enseignant }) {
    const salaire = enseignant.salaire;
    let ancienneValeur = 0;
    let restesalaire = 0;
    return (
        <div className="text-center">
            {enseignant.avance.length === 0 ? (
                <Alert
                    variant="filled"
                    severity="warning"
                    sx={{
                        marginTop: "20px",
                    }}
                >
                    Ce mois-ci, l'enseignant n'a pas encore reçu de paiement
                    anticipé.
                </Alert>
            ) : (
                <>
                    <div className="mt-5"></div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ref</th>
                                <th>Salaire</th>
                                <th>Avance</th>
                                <th>Date</th>
                                <th>Reste</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enseignant.avance.map((item, id) => {
                                if (restesalaire === 0) {
                                    ancienneValeur = salaire;
                                    restesalaire = salaire - item.avance;
                                } else {
                                    ancienneValeur = restesalaire;
                                    restesalaire = restesalaire - item.avance;
                                }
                                return (
                                    <ListItemAvance
                                        key={item.id}
                                        item={item}
                                        ancienneValeur={ancienneValeur}
                                        restesalaire={restesalaire}
                                    />
                                );
                            })}
                        </tbody>
                    </Table>
                </>
            )}
            <div className="mt-5">
                <Button
                    variant="contained"
                    color="error"
                    href={`/avance/create?idenseignant=${enseignant.id}`}
                >
                    Maka avance
                </Button>
            </div>
        </div>
    );
}
