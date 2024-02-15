import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import cardimage1 from "../../assets/images/cardimage1.jpg";
import cardimage2 from "../../assets/images/cardimage2.jpg";
import cardimage3 from "../../assets/images/cardimage3.jpg";

export default function CardInformation(props) {
    let { "data-color": color } = props;
    let { "data-title": title } = props;
    let { "data-content": content } = props;
    let { "data-image": image } = props;
    console.log();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            sx={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.9)", // Ajouter une ombre
            }}
        >
            <CardActionArea
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/"
                sx={{
                    backgroundImage: `url(${
                        image === "image1"
                            ? cardimage3
                            : image === "image2"
                            ? cardimage2
                            : cardimage1
                    })`, // Définir l'image de fond
                    backgroundSize: "cover", // Ajuster la taille de l'image pour qu'elle couvre toute la zone
                    backgroundPosition: "center", // Centrer l'image de fond
                    height: 400, // Hauteur conditionnelle
                    display: "flex", // Utiliser Flexbox
                    flexDirection: "column", // Aligner les éléments verticalement
                    justifyContent: "flex-end",
                }}
            >
                <CardContent
                    sx={{
                        backgroundColor: color,
                        color: "white",
                        overflow: "hidden", // Masquer le contenu dépassant de la zone
                        transition: "height 0.3s ease", // Animation de la hauteur
                        height: isHovered ? 250 : 125, // Hauteur conditionnelle
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            overflow: "hidden",
                        }}
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
