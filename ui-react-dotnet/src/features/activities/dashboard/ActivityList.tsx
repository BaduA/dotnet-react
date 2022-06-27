import React from "react";
import { Activity } from "../../../app/models/activity";
interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id:string)=>void

}
export default function ActivityList({activities,selectActivity,deleteActivity} : Props) {
    return (
        <div className="activity-list-container">
            {activities.map(activity=>(
                <div key={activity.id} className="activity-item">
                    <div className="activity-header">
                        <h3>{activity.title}</h3>
                        <p>{activity.date}</p>
                    </div>

                    <p>{activity.description}</p>
                    <p>{activity.category}</p>
                    <p>{activity.city}, {activity.venue}</p>
                    <div className="activity-buttons">
                        <button onClick={()=>deleteActivity(activity.id)} className="activity-category">Delete</button>
                        <button onClick={()=>selectActivity(activity.id)} className="activity-button">View</button>
                    </div>
                </div>
            ))}
        </div>
    )
}