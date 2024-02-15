// Paginations.jsx
import React from "react";
import s from "./style.module.css";

export function Paginations({ currentPage, pageSize, totalItems, paginate }) {
    return (
        <div className={`text-center ${s.pagination}`}>
            <nav>
                <ul className={s.red_pagination}>
                    {Array.from(
                        { length: Math.ceil(totalItems / pageSize) },
                        (_, index) => (
                            <li
                                key={index}
                                className={`page-item ${
                                    currentPage === index + 1 ? "active" : ""
                                }`}
                            >
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={"page-link"}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
}
