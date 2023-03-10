import React, { useState } from "react";
import SpecialtySelect from './SpecialtySelect'

function NewProgramForm({ onAddProgram }) {
    const [name, setName] = useState('')
    const [hospital, setHospital] = useState('')
    const [website, setWebsite] = useState('')
    const [pgy1salary, setPgy1salary] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [program_size, setProgram_size] = useState('')
    const [program_age, setProgram_age] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [area_type, setArea_type] = useState('')
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const strongParams = {
            name: name,
            hospital: hospital,
            website: website,
            pgy1salary: pgy1salary,
            specialty: specialty,
            program_size: program_size,
            program_age: program_age,
            state: state,
            city: city,
            area_type: area_type
        }
        fetch('/programs', {
            method: 'POST',
            body: JSON.stringify(strongParams),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                response.json().then((newProgram) => onAddProgram(newProgram));
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        });
        // .then(res => res.json())
        // .then(newProgram => onAddProgram(newProgram))
        console.log('new program added')
        setName('')
        setHospital('')
        setWebsite('')
        setPgy1salary('')
        setSpecialty('')
        setProgram_size('')
        setProgram_age('')
        setState('')
        setCity('')
        setArea_type('')
    };

    return (
        <div>
            <h1>New Program</h1>
            <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
                <label>Name</label>
                <input type="text" placeholder="Program Name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Hospital</label>
                <input type="text" placeholder="Hospital Name" value={hospital} onChange={(e) => setHospital(e.target.value)} />
                <br />
                <label>Website</label>
                <input type="text" placeholder="Program website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                <br />
                <label>PGY1 Salary</label>
                <input type="number" min="0" placeholder="PGY1 Salary" value={pgy1salary} onChange={(e) => setPgy1salary(e.target.value)} />
                <br />
                <label>Specialty</label>
                <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="" disabled defaultValue hidden >Select Specialty</option>
                    <SpecialtySelect />
                </select>
                <br />
                <label>Size</label>
                <input type="number" min="0" placeholder="Program Size" value={program_size} onChange={(e) => setProgram_size(e.target.value)} />
                <br />
                <label>Age</label>
                <input type="number" min="0" placeholder="Program Age" value={program_age} onChange={(e) => setProgram_age(e.target.value)} />
                <br />
                <br />
                <label>Area Details</label>
                <br />
                <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                <br />
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <br />
                <select value={area_type} onChange={(e) => setArea_type(e.target.value)}>
                    <option value="" disabled defaultValue hidden >
                        Select Area
                    </option>
                    <option>Urban</option>
                    <option>Suburban</option>
                    <option>Rural</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewProgramForm;