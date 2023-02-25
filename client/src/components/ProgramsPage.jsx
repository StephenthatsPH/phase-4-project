import React, { useState } from "react";
import ProgramsList from "./Programs/ProgramsList";
import NewProgramForm from "./Programs/NewProgramForm";

function ProgramsPage({ onAddProgram }){
    const [isNewProgram, setIsNewProgram] = useState(true);

    const handleToggleForm = () => {
        setIsNewProgram(!isNewProgram);
    };

    return (
        <div>
            <button onClick={handleToggleForm}>
                {isNewProgram ? 'Click here to add a program.' : 'Click to list all programs.'}
            </button>
            {isNewProgram ? <ProgramsList /> : <NewProgramForm onAddProgram={onAddProgram} />}
        </div>
    );
}

export default ProgramsPage;