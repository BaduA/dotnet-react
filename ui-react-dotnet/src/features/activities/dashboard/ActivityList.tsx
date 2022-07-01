import React, { SyntheticEvent, useState } from "react";
import { Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}
export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {

    const [target,setTarget] = useState("");
    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>,id:string){
        setTarget(e.currentTarget.name)
        deleteActivity(id)
    }

  return (
    <div className="activity-list-container">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <div className="activity-header">
            <h3>{activity.title}</h3>
            <p>{activity.date}</p>
          </div>

          <p>{activity.description}</p>
          <p>{activity.category}</p>
          <p>
            {activity.city}, {activity.venue}
          </p>
          <div className="activity-buttons">
            <Button
            name={activity.id}
              loading={submitting && target === activity.id}
              onClick={(e) => handleActivityDelete(e,activity.id)}
              className="activity-category"
            >
              Delete
            </Button>
            <button
              onClick={() => selectActivity(activity.id)}
              className="activity-button"
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
