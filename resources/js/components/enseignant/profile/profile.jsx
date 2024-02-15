import React, { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { Grid, Button, Checkbox } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ShowAvanceliste from "../listeAvance/listeAvance";

export default function UserCard(props) {
    let { "data-enseignant": enseignant } = props;
    const [checked, setChecked] = useState(false);

    const handleModifierClick = () => {
        // Ajoutez ici la logique pour la modification de l'enseignant
        console.log("Modifier enseignant");
    };

    const handleChange = (event) => {
        setChecked(!checked);
    };

    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                    overflow: { xs: "auto", sm: "initial" },
                    marginTop: "50px",
                    boxShadow: "0 30px 30px rgba(0, 0, 0, 0.3)",
                }}
            >
                <Box />
                <Card
                    orientation="horizontal"
                    sx={{
                        width: "100%",
                        flexWrap: "wrap",
                        [`& > *`]: {
                            "--stack-point": "500px",
                            minWidth:
                                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                        },
                        resize: "horizontal",
                    }}
                >
                    <AspectRatio
                        flex
                        ratio="1"
                        maxHeight={182}
                        sx={{ minWidth: 182 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Typography
                                    color="danger"
                                    level="h1"
                                    fontWeight="lg"
                                >
                                    {enseignant.nomenseignant}
                                </Typography>
                                <Typography level="h2">
                                    {enseignant.prenomenseignant}
                                </Typography>
                                <Typography
                                    fontStyle={"inherit"}
                                    fontWeight="lg"
                                    sx={{ fontSize: 20 }}
                                >
                                    {enseignant.sexeenseignant}
                                    {enseignant.sexeenseignant === "Femme" ? (
                                        <FemaleIcon
                                            color="error"
                                            sx={{ fontSize: 30 }}
                                        />
                                    ) : (
                                        <MaleIcon
                                            color="info"
                                            sx={{ fontSize: 30 }}
                                        />
                                    )}
                                </Typography>
                                <Typography
                                    fontStyle={"inherit"}
                                    fontWeight="lg"
                                    sx={{ fontSize: 20 }}
                                >
                                    {enseignant.addresseenseignant}
                                </Typography>
                                <Typography
                                    fontStyle={"inherit"}
                                    fontWeight="lg"
                                    sx={{ fontSize: 20 }}
                                >
                                    {enseignant.contactenseignant}
                                </Typography>
                                <Typography
                                    fontStyle={"inherit"}
                                    fontWeight="lg"
                                    sx={{ fontSize: 20 }}
                                >
                                    {enseignant.sexeenseignant === "Femme"
                                        ? "Elle "
                                        : "Il "}
                                    est encharge du classe de{" "}
                                    {enseignant.classe.nomclasse}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    href={`/enseignants/${enseignant.id}/edit`}
                                    variant="contained"
                                    color="primary"
                                >
                                    Modifier
                                </Button>
                                <Button
                                    href={`/register/${enseignant.id}`}
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        marginTop: "20px",
                                    }}
                                >
                                    Creer un compte
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className="mx-5"
                    style={{ Width: "400px", marginTop: "20px" }} // Définir la largeur maximale souhaitée et l'écart supérieur
                    href="/enseignants"
                >
                    <img
                        className="text-white-50"
                        src="/images/icone/arrow-left.svg"
                    />
                    retour
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    style={{ maxWidth: "300px", marginTop: "20px" }} // Définir la largeur maximale souhaitée et l'écart supérieur
                    onClick={handleChange}
                >
                    <img
                        className="text-white-50"
                        src="/images/icone/binoculars.svg"
                    />
                    Status
                </Button>
            </div>
            {checked && <ShowAvanceliste enseignant={enseignant} />}
        </div>
    );
}
