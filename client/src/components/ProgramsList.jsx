import React from "react";
import { NavLink } from "react-router-dom";
import ReviewsList from "./ReviewsList";

function ProgramsList({ programs }) {

    const getPrograms = programs.map((program) => {
        return <div key={program.id}>
            <h2>{program.name}</h2>
            <NavLink to={`/programs/${program.id}/overview`}>
                <p>More info on {program.name}</p>
            </NavLink>
        </div>
    })

    return (
        <div>
            <h1>Programs</h1>
            {getPrograms}
        </div>
    );
}

export default ProgramsList;