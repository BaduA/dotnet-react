import React from "react";
import { useStore } from "../stores/store";


export default function Navbar() {
    const {activityStore} = useStore()
    return (
        <div className="nav-container">
            <button className="brand">PNGHUB Demo</button>
            <button>Activities</button>
            <button onClick={() => activityStore.openForm()}>Create Activity</button>
        </div>
    )
}