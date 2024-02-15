import React, { useEffect } from "react";

const ListItemAvance = ({ restesalaire, item, ancienneValeur }) => {
    return (
        <tr>
            <th>{item.id}</th>
            <th>{ancienneValeur}</th>
            <th>{item.avance}</th>
            <th>{item.dateavance}</th>
            <th>{restesalaire}</th>
        </tr>
    );
};

export default ListItemAvance;
