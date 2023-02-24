import React from "react";

function NewProgramForm() {
    return (
        <div>
            <h1>New Program</h1>
            <form>
            <label>Name</label>
                <input type="text" name="name" placeholder="Program Name" />
                <br />
                <label>Hospital</label>
                <input type="text" name="hospital" placeholder="Hospital Name" />
                <br />
                <label>Website</label>
                <input type="text" name="website" placeholder="Program website" />
                <br />
                <label>PGY1 Salary</label>
                <input type="number" name="pgy1salary" placeholder="PGY1 Salary" />
                <br />
                <label>Specialty</label>
                <input type="text" name="specialty" placeholder="Program Specialty" />
                <br />
                <label>Size</label>
                <input type="number" name="program_size" placeholder="Program Size" />
                <br />
                <label>Age</label>
                <input type="number" name="program_age" placeholder="Program Age" />
                <br />
                <br />
                <label>Area Details</label>
                <br />
                <input type="text" name="state" placeholder="State" />
                <br />
                <input type="text" name="city" placeholder="City" />
                <br />
                <select>
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