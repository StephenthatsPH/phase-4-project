function SpecialtySelect() {
    const specialties = [
        "Internal Medicine",
        "Medical Genetics and Genomics",
        "Osteopathic Neuromusculoskeletal Medicine",
        "Pediatrics",
        "Preventive Medicine",
        "Emergency Medicine",
        "Family Medicine",
        "Neurology",
        "Pathology",
        "Anesthesiology",
        "Internal Medicine Pediatrics",
        "Nuclear Medicine",
        "Obstetrics and Gynecology",
        "Ophthalmology",
        "Dermatology",
        "Psychiatry",
        "Child Neurology",
        "Diagnostic Radiology",
        "Orthopedic Surgery",
        "Otolaryngology",
        "Radiation Oncology",
        "General Surgery",
        "Urology",
        "Vascular Surgery",
        "Plastic Surgery",
        "Interventional Radiology",
        "Thoracic Surgery",
        "Neurological Surgery",
    ]

    return (
        <>
            {specialties.map((specialty) => (<option value={specialty} >{specialty}</option>))}
        </>
    );
}

export default SpecialtySelect;