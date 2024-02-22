import * as React from "react";
import AvanceCard from "../AvanceCard/AvanceCard";

export default function AvanceDemande(props) {
    let { "data-listeDemandeAvance": listeDemandeAvance } = props;
    return (
        <div className="container bg-dark mt-5 ">
            {listeDemandeAvance.map((item, id) => (
                <div
                    className="row justify-content-center"
                    key={id + item.enseignant.nomenseignant}
                >
                    <div className="col-md-6 ">
                        <AvanceCard
                            nomenseignant={item.enseignant.nomenseignant}
                            avance={item.avance}
                            dateavance={item.dateavance}
                            id={item.id}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
