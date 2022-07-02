import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import { AppLayout } from "./AppLayout";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout admin={true}></AppLayout>}>
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route key="1" path="/createactivity" element={<ActivityForm />} />
          <Route key="2" path="/manage/:id" element={<ActivityForm />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default observer(App);

// {
/* <Fragment>
<Navbar></Navbar>
<div className="dashboard-container">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/activities" element={<ActivityDashboard />} />
    <Route path="/activities/:id" element={<ActivityDetails />} />
    <Route key="1" path="/createactivity" element={<ActivityForm />} />
    <Route key="2" path="/manage/:id" element={<ActivityForm />} />
  </Routes>
</div>
</Fragment> */
// }
// <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path={"./(.+)"}
//           element={
//             <Fragment>
//               <Navbar></Navbar>
//               <div className="dashboard-container">
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/activities" element={<ActivityDashboard />} />
//                 <Route path="/activities/:id" element={<ActivityDetails />} />
//                 <Route
//                   key="1"
//                   path="/createactivity"
//                   element={<ActivityForm />}
//                 />
//                 <Route key="2" path="/manage/:id" element={<ActivityForm />} />
//               </div>
//             </Fragment>
//           }
//         />
//       </Routes>
