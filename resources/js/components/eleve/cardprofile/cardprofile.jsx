import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { PersonFill, CameraFill } from "react-bootstrap-icons";
import background from "../../../assets/images/background.jpg";

export default function CongratCard(props) {
    let { "data-card": eleve } = props;
    return (
        <Card
            data-resizable
            sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                overflow: "auto",
                resize: "horizontal",
                "--icon-size": "100px",
                height: "100%",
                boxShadow: "0 30px 30px rgba(0, 0, 0, 0.3)",
            }}
        >
            <CardOverflow
                variant="solid"
                color="danger"
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover", // ou 'contain' selon votre préférence
                    backgroundPosition: "center center", // ajustez si nécessaire
                    backgroundRepeat: "no-repeat",
                    height: 200,
                }}
            >
                <AspectRatio
                    variant="outlined"
                    color="danger"
                    ratio="1"
                    sx={{
                        m: "auto",
                        transform: "translateY(90%)",
                        borderRadius: "100%",
                        width: "var(--icon-size)",
                        boxShadow: "sm",
                        bgcolor: "background.surface",
                        position: "relative",
                    }}
                >
                    <div>
                        <PersonFill ratio="0.5" size={50} color="red" />
                    </div>
                </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ maxWidth: "40ch", marginTop: 5 }}>
                <CardContent sx={{ maxWidth: "40ch" }}>
                    <div>
                        <CameraFill className="mx-2" color="danger" size={30} />
                    </div>
                    <div
                        className="font-weight-bold text-uppercase text-danger"
                        style={{ fontSize: "20px" }}
                    >
                        <strong>{eleve.nom}</strong>
                    </div>
                    <div className="font-weight-bold  text-danger">
                        {eleve.prenom}
                    </div>

                    <div className="d-flex mx-auto">
                        <div className="text-center">
                            <strong className="font-weight-bold">
                                Classe :
                            </strong>
                        </div>
                        <div>{eleve.classe.nomclasse}</div>
                    </div>
                    <p className="card-text">
                        <strong>Sexe:</strong> {eleve.sexe}
                    </p>
                    <p className="card-text">
                        <strong>Date de naissance:</strong>{" "}
                        {eleve.datedenaissance}
                    </p>
                    <p className="card-text">
                        <strong>Adresse:</strong> {eleve.addresse}
                    </p>
                </CardContent>
            </CardContent>
        </Card>
    );
}
