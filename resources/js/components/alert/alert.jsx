import React, { useState } from "react";
import { Snackbar, IconButton } from "@mui/material";
import { Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AutoCloseSnackbar = ({
    open,
    onClose,
    severity,
    message,
    autoHideDuration,
}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            style={{ marginTop: "50px", width: "80%" }}
        >
            <Alert
                severity={severity}
                action={
                    <IconButton size="small" color="inherit" onClick={onClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
                sx={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    width: "100%",
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default function alerts(props) {
    let { "data-alerts": alerts } = props;
    console.log(alerts);
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="my-2 mx-5">
            <AutoCloseSnackbar
                open={open}
                onClose={handleClose}
                severity="success"
                message={alerts}
                autoHideDuration={5000} // 5000 milliseconds (5 seconds)
            />
        </div>
    );
}
