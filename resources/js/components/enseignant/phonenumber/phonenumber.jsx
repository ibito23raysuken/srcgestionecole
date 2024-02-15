import React, { useState } from "react";

const PhoneNumberInput = (props) => {
    console.log("ici");
    let { "data-phonenumber": phonenumber } = props;
    let defaultvalue;
    phonenumber != null
        ? (defaultvalue = phonenumber["phonenumber"])
        : (defaultvalue = "");
    const [phoneNumber, setPhoneNumber] = useState(defaultvalue);

    const formatPhoneNumber = (input) => {
        const cleaned = input.replace(/\D/g, ""); // Supprime tous les caractères non numériques
        const formatted = cleaned.replace(
            /(\d{3})(\d{2})(\d{3})(\d{2})/,
            "$1-$2-$3-$4"
        );
        return formatted.trim();
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        const formatted = formatPhoneNumber(input);
        setPhoneNumber(formatted);
    };

    return (
        <div id="formularhidden" className="form-group">
            <label htmlFor="contactenseignant" className="form-label">
                CONTACT
            </label>
            <input
                type="tel"
                className="form-control"
                name="contactenseignant"
                id="contactenseignant"
                value={phoneNumber}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default PhoneNumberInput;
