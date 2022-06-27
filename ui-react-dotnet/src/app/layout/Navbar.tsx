import React from "react";

interface Props {
    openForm: ()=> void
}

export default function Navbar({openForm}:Props) {
    return (
        <div className="nav-container">
            <button className="brand">PNGHUB Demo</button>
            <button>Activities</button>
            <button onClick={openForm}>Create Activity</button>
        </div>
    )
}