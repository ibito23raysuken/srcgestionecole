import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CottageIcon from "@mui/icons-material/Cottage";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CreateIcon from "@mui/icons-material/Create";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export function DrawerAdmin({ condition }) {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [openSubMenu2, setOpenSubMenu2] = useState(false);

    const handleCloseSubMenu = () => {
        setOpenSubMenu(false);
    };

    const handleCloseSubMenu2 = () => {
        setOpenSubMenu2(false);
    };

    const handleClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    const handleClick2 = () => {
        setOpenSubMenu2(!openSubMenu2);
    };

    return (
        <div>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <SupervisorAccountIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Administration Scolaire" />
                        {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>

                <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            href="/eleves/create"
                            onClick={handleCloseSubMenu}
                        >
                            <ListItemIcon>
                                <CreateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inscription" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton
                            href="/enseignants/create"
                            onClick={handleCloseSubMenu}
                        >
                            <ListItemIcon>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Enregistrer un enseignant" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton
                            href="/classes/create"
                            onClick={handleCloseSubMenu}
                        >
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Créer une classe" />
                        </ListItemButton>
                        <ListItemButton
                            href="/matieres/create"
                            onClick={handleCloseSubMenu}
                        >
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Créer une matiere" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClick2}>
                        <ListItemIcon>
                            <DashboardIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="DashBoard" />
                        {openSubMenu2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>

                <Collapse in={openSubMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            href="/eleves"
                            onClick={handleCloseSubMenu2}
                        >
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liste des Etudiants" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton
                            href="/enseignants"
                            onClick={handleCloseSubMenu2}
                        >
                            <ListItemIcon>
                                <EngineeringIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liste des Enseignant" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton
                            href="/classes"
                            onClick={handleCloseSubMenu2}
                        >
                            <ListItemIcon>
                                <CottageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liste des classes" />
                        </ListItemButton>
                        <ListItemButton
                            href="/matieres"
                            onClick={handleCloseSubMenu2}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liste des Matiere" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        href={
                            condition
                                ? "/parametre/create"
                                : "/parametre/1/edit"
                        }
                        onClick={handleCloseSubMenu2}
                    >
                        <ListItemIcon>
                            <SettingsIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary="Parametre" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
}
