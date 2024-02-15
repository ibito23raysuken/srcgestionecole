import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { DrawerAdmin } from "./DrawerAdmin";
import { DrawerEnseignant } from "./DrawersEnseignant";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer(props) {
    const { "data-parametre": parametre, "data-connexion": connexion } = props;
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [condition, setCondition] = useState(false);
    useEffect(() => {
        if (parametre.length > 0) {
            setCondition(false);
        } else {
            setCondition(true);
        }
    }, []);

    const handleMenuMouseEnter = () => {
        setOpen(true);
    };

    const handleMenuMouseLeave = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //////////////////////////////////////////////////////////////////
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch("/api/csrf-token");

                if (!response.ok) {
                    throw new Error(`Erreur de réseau: ${response.status}`);
                }

                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {}
        };

        fetchCsrfToken();
    }, []);
    const handleDeconnexion = async () => {
        try {
            const response = await axios.post(`/logout`, null, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });
            window.location.href = "/";
        } catch (error) {}
    };
    return (
        <Box>
            <CssBaseline />
            <AppBar color="error" position="fixed" open={open}>
                <Toolbar>
                    {connexion ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        ""
                    )}

                    <Typography
                        href="/"
                        variant="h6"
                        noWrap
                        component="a"
                        color="white"
                        className="btn "
                    >
                        Radama I
                    </Typography>
                    {connexion ? (
                        <div
                            style={{
                                marginLeft: "auto",
                            }}
                        >
                            {connexion.role === "ADMIN" ? (
                                <IconButton href="/demandes" color="inherit">
                                    <EmailIcon style={{ fontSize: "30px" }} />
                                </IconButton>
                            ) : connexion.role === "ENSEIGNANT" ? (
                                <IconButton href="/demandes" color="inherit">
                                    <NotificationsIcon
                                        style={{ fontSize: "30px" }}
                                    />
                                </IconButton>
                            ) : (
                                ""
                            )}

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                color="white"
                                className="btn "
                            >
                                Bonjour,{connexion.name}
                            </Typography>
                            <IconButton color="inherit">
                                <AccountCircleIcon
                                    style={{ fontSize: "25px" }}
                                />
                            </IconButton>
                        </div>
                    ) : (
                        <Button
                            color="inherit"
                            style={{
                                backgroundColor: "gray",
                                marginLeft: "auto",
                            }}
                            href="/login"
                        >
                            CONNEXION
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            {connexion ? (
                <Drawer
                    variant="permanent"
                    open={open}
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {connexion.role === "ADMIN" ? (
                        <DrawerAdmin condition={condition} />
                    ) : connexion.role === "ENSEIGNANT" ? (
                        <DrawerEnseignant />
                    ) : (
                        ""
                    )}
                    <List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={handleDeconnexion}>
                                <ListItemIcon>
                                    <LogoutIcon color="error" />
                                </ListItemIcon>
                                <ListItemText primary="LOGOUT" />
                            </ListItemButton>
                        </List>
                    </List>
                </Drawer>
            ) : (
                ""
            )}
        </Box>
    );
}
