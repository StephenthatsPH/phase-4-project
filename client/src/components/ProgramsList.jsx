import React from "react";
import { NavLink } from "react-router-dom";

function ProgramsList({ programs }) {

    const getPrograms = programs.map((program) => {
        return <div key={program.id}>
            <h3>{program.name}</h3>
            <ul>
            {program.specialty}
            <NavLink to={`/programs/${program.id}/overview`}>
                <p>More info on {program.name}</p>
            </NavLink>
            </ul>
        </div>
    })

    return (
        <div>
            <h1>Teaching Programs</h1>
            {getPrograms}
        </div>
    );
}

export default ProgramsList;