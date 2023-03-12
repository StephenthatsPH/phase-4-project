function MedyearSelect() {
    const medyears = [
        "MD 1",
        "MD 2",
        "MD 3",
        "MD 4",
    ]

    return (
        <>
            {medyears.map((medyear) => (<option value={medyear} >{medyear}</option>))}
        </>
    );
}

export default MedyearSelect;