import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelecetedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/Activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelecetedActivity(activities.find((x) => x.id === id));
    console.log(selectedActivity);
  }
  function handleCancleSelectedActivity() {
    setSelecetedActivity(undefined);
  }
  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancleSelectedActivity();
    setEditMode(true);
  }
  function handleFormClose() {
    setEditMode(false);
  }
  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ])
      : setActivities([...activities, {...activity, id:uuid()}]);
      setEditMode(false)
      setSelecetedActivity(activity)
  }
  function handleDeleteActivity(id:string){
    setActivities([...activities.filter(c=>c.id!==id)])
  }
  return (
    <Fragment>
      <Navbar openForm={handleFormOpen}></Navbar>
      <div className="dashboard-container">
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancleSelectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        ></ActivityDashboard>
      </div>
    </Fragment>
  );
}

export default App;
