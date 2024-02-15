import React, { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Row, Col, Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "../modal/AlertDialogueBase";

export default function AvanceCard({ nomenseignant, avance, dateavance, id }) {
    const [showButtons, setShowButtons] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const handleDialogClose = (e) => {
        e.stopPropagation();
        setDialogOpen(false);
    };
    const handleDelete = (e) => {
        e.stopPropagation();
        setDialogOpen(true);
    };

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };
    const toggleButtonsAccept = () => {
        console.log("accepter");
    };
    const toggleButtonsDecline = () => {
        console.log("decline");
    };
    async function toggleDelete(e) {
        console.log(e);
        try {
            const response = await axios.delete(`/demandes/destroy/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        window.location.reload();
    }

    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                },
                marginTop: 2,
                marginBottom: 2,
                cursor: "pointer",
            }}
            onClick={toggleButtons}
        >
            <Row>
                <Col md={2}>
                    <AspectRatio ratio="1">
                        <img
                            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={10}>
                            <CardContent>
                                <Typography variant="h5" id="card-description">
                                    {nomenseignant}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    aria-describedby="card-description"
                                    mb={1}
                                >
                                    Veuillez accepter ma demande d'avancement
                                    sur Salaire de {avance} Ar du {dateavance}.
                                </Typography>
                            </CardContent>
                            {showButtons && (
                                <div>
                                    <Button
                                        variant="success"
                                        className="me-2 m-1"
                                        onClick={toggleButtonsAccept}
                                    >
                                        Accepter
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="m-1"
                                        onClick={toggleButtonsDecline}
                                    >
                                        Décliner
                                    </Button>
                                </div>
                            )}
                        </Col>
                        <Col md={2}>
                            <DeleteIcon
                                fontSize="large"
                                onClick={handleDelete}
                                sx={{
                                    "&:hover": {
                                        color: "red",
                                    },
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                deleted_data={"demande d'avance"}
                onClickAccept={toggleDelete}
            />
        </Card>
    );
}
