import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ListItem } from "../listitem/ListeItem";
import { Paginations } from "../../pagination/pagination";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function DatatablePage(props) {
    let { "data-eleves": eleves, "data-listemois": listemois } = props;
    const [checked, setChecked] = React.useState([]);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [triageStatut, settriageStatut] = useState(false);
    const [TextTriage, setTextTriage] = useState("Triage par non payer");
    const pageSize = 10; // Nombre d'éléments par page
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    let parametrelistemois =
        listemois[listemois.length - 1].listemois.split(",");
    const handleMenuItemClick = (option) => {
        if (option == "triageStatut") {
            console.log("trier par statut de ecolage");
            if (filterText == "non payer") {
                setFilterText("");
                setTextTriage("Triage par non payer");
            } else {
                setFilterText("non payer");
                setTextTriage("Annuler Triage");
            }
        } else if (option == "triageparmois") {
            console.log(
                "trier par moi et afficher selection de mois de ecolage"
            );
            settriageStatut(!triageStatut);
            setOpen(!open);
        }
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const inputHandler = (e) => {
        setFilterText(e.target.value.toLowerCase());
        setCurrentPage(1);
    };
    const onclickecolage = (e) => {
        console.log("ecolagecliquer");
    };
    const normalizeString = (str) => {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    };
    var i = 0;
    const filteredData = eleves.filter((el) => {
        if (filterText === "" && checked.length === 0) {
            return el;
        } else {
            const isMatchingName =
                el.nom.toLowerCase().includes(filterText) ||
                el.prenom.toLowerCase().includes(filterText);

            const isMatchingEcolage = el.ecolage
                ? "payer" === filterText.toLowerCase()
                : "non payer" === filterText.toLowerCase();

            const isMatchingMonths =
                checked.length === 0 ||
                checked.some((month) => {
                    if (el.ecolages[0].mois.includes(month)) {
                    } else {
                        return true;
                    }
                    return false;
                });
            return isMatchingMonths
                ? isMatchingName || isMatchingEcolage
                : isMatchingMonths;
        }
    });

    // Pagination
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="m-5">
            <div>
                <div className="row">
                    <div className="col-6 col-mx-4 mx-auto">
                        <div className="search mb-3">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                onChange={inputHandler}
                                fullWidth
                                label="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Classe</th>
                                    <th>Droit</th>
                                    <th>
                                        <div>
                                            <div className="d-flex justify-content-end">
                                                <Button
                                                    onClick={handleMenuClick}
                                                    sx={{
                                                        color: "black",
                                                    }}
                                                >
                                                    <MoreVertIcon />
                                                </Button>
                                                <Button
                                                    onClick={onclickecolage}
                                                    sx={{
                                                        color: "black",
                                                    }}
                                                >
                                                    Ecolage
                                                </Button>
                                            </div>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                            >
                                                <MenuItem
                                                    onClick={() =>
                                                        handleMenuItemClick(
                                                            "triageStatut"
                                                        )
                                                    }
                                                >
                                                    {TextTriage}
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleMenuItemClick(
                                                            "triageparmois"
                                                        )
                                                    }
                                                >
                                                    Trier par mois
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    </th>
                                    <th>
                                        <Button
                                            sx={{
                                                color: "black",
                                                fontWeight: "bolder",
                                            }}
                                        >
                                            Actions
                                        </Button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, id) => (
                                    <ListItem key={item.nom + id} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Paginations
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItems={filteredData.length}
                    paginate={paginate}
                />
            </div>
            <TriageMois parametrelistemois={parametrelistemois} />
        </div>
    );
    function TriageMois({ parametrelistemois }) {
        const handleCheckboxChange = (month) => {
            const currentIndex = checked.indexOf(month);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(month);
            } else {
                newChecked.splice(currentIndex, 1);
            }
            setChecked(newChecked);
        };
        return (
            <div style={{ display: "flex" }}>
                <Drawer
                    PaperProps={{
                        sx: {
                            paddingTop: 20,
                            backgroundColor: "whitesmoke",
                            boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.9)",
                            borderRadius: "20px 0px 0px 20px",
                        },
                    }}
                    anchor="right"
                    open={open}
                    variant="persistent"
                >
                    <CardContent>
                        <div>
                            <strong>SELECTIONNER MOIS</strong>
                        </div>
                        <FormGroup>
                            {parametrelistemois.map((month) => (
                                <FormControlLabel
                                    key={month}
                                    control={
                                        <Checkbox
                                            checked={checked.includes(month)}
                                            onChange={() =>
                                                handleCheckboxChange(month)
                                            }
                                        />
                                    }
                                    label={month}
                                />
                            ))}
                        </FormGroup>
                    </CardContent>
                </Drawer>
            </div>
        );
    }
}

export default DatatablePage;
