import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const {deleteActivity,activitiesByDate,loading} = activityStore

  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <div className="activity-list-container">
      {activitiesByDate.map((activity) => (
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
              loading={loading && target === activity.id}
              onClick={(e) => handleActivityDelete(e, activity.id)}
              className="activity-category"
            >
              Delete
            </Button>
            <button
              onClick={() => activityStore.selectActivity(activity.id)}
              className="activity-button"
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});
