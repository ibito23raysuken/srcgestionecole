import React, { useRef, useState, useEffect } from "react";

import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import BulletinImp from "./BulletinImp/BulletimImp";
import Bulletinform from "./Bulletinform/Bulletinform";

export default function ListeNotes(props) {
    const [note, setNote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [examen, seteditexam] = useState();
    const contentToPrint = useRef();

    let { "data-listenoteenseignants": data } = props;
    const matieres = data.matieres;
    const ideleve = data.eleve.id;
    const handlePrint = useReactToPrint({
        content: () => contentToPrint.current,
    });
    const fetchData = async (idexam) => {
        try {
            const response = await axios.get(`/notes/${idexam}/${ideleve}`);
            setNote(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching realtime data:", error);
        }
        seteditexam(idexam);
    };
    const handleSelectChange = () => {
        const selectElement = document.getElementById("exam");
        if (selectElement) {
            const selectedValue = selectElement.value;
            seteditexam(selectedValue);
        }
    };

    useEffect(() => {
        fetchData(examen);
        return () => {};
    }, [examen]);
    return (
        <div className=" text-center">
            <div className="row p-5 m-5">
                <div className="col-lg-7">
                    <select
                        className="form-select mb-3"
                        aria-label="Selectioner examen"
                        id="exam"
                        onChange={handleSelectChange}
                    >
                        <option value={0}>Selectioner un l'examen</option>
                        <option value={1}>Examen 1</option>
                        <option value={2}>Examen 2</option>
                        <option value={3}>Examen 3</option>
                    </select>
                    <Bulletinform
                        matieres={matieres}
                        isLoading={isLoading}
                        note={note}
                        idetudiant={data.eleve.id}
                        fetchData={fetchData}
                        examen={examen}
                    ></Bulletinform>
                </div>
                <div
                    className={`col-lg-5 d-flex flex-column align-items-center`}
                >
                    <button
                        className="btn btn-primary mb-3 w-50"
                        onClick={handlePrint}
                    >
                        <PrintIcon />
                        Imprimer
                    </button>
                    <BulletinImp
                        data={data}
                        isLoading={isLoading}
                        ref={contentToPrint}
                        note={note}
                        examen={examen}
                        fetchData={fetchData}
                    ></BulletinImp>
                </div>
            </div>
        </div>
    );
}
