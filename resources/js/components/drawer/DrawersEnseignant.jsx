import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import CottageIcon from "@mui/icons-material/Cottage";
import EmailIcon from "@mui/icons-material/Email";

export function DrawerEnseignant() {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const handleCloseSubMenu = () => {
        setOpenSubMenu(false);
    };
    const handleClick = () => {
        setOpenSubMenu(!openSubMenu);
    };
    return (
        <>
            <div>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <DashboardIcon color="error" />
                            </ListItemIcon>
                            <ListItemText primary="DashBoard" />
                            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton
                                href="/enseignants/eleves"
                                onClick={handleCloseSubMenu}
                            >
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Liste des Etudiants" />
                            </ListItemButton>
                            <Divider />
                            <ListItemButton
                                href="/classes"
                                onClick={handleCloseSubMenu}
                            >
                                <ListItemIcon>
                                    <CottageIcon />
                                </ListItemIcon>
                                <ListItemText primary="Emploie du Temps" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Parametre Compte" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton href="/demandes/liste">
                        <ListItemIcon>
                            <EmailIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Demande d'avance" />
                    </ListItemButton>
                </List>
            </div>
        </>
    );
}
