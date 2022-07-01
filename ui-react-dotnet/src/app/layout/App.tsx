import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app"></LoadingComponent>;
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="dashboard-container">
        <ActivityDashboard></ActivityDashboard>
      </div>
    </Fragment>
  );
}

export default observer(App);
