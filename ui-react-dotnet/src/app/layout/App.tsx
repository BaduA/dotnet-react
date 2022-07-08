import React, { Fragment, useEffect } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../../features/home/homepage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import { AppLayout } from "./AppLayout";
import TestErrors from "../../features/errors/testErrors";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import { AxiosInterceptorsSetup } from "../api/agent";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponents";
import ModalContainer from "../common/modals/ModalContainer";


function AxiosInterceptorNavigate() {
  let navigate = useNavigate();
  AxiosInterceptorsSetup(navigate);
  return <></>
}

function App() {
  const {commonStore, userStore}  = useStore();

  useEffect(()=> {
    if(commonStore.token){
      userStore.getUser().finally(()=> commonStore.setAppLoaded())
    }else{
      commonStore.setAppLoaded();
    }
  },[commonStore,userStore])
  if(!commonStore.appLoaded) return <LoadingComponent content="Loading"></LoadingComponent>
  return (
    <Fragment>
      {<AxiosInterceptorNavigate></AxiosInterceptorNavigate>}
      <ToastContainer position="bottom-right" hideProgressBar></ToastContainer>
      <ModalContainer></ModalContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout admin={true}></AppLayout>}>
            <Route path="/activities" element={<ActivityDashboard />} />
            <Route path="/activities/:id" element={<ActivityDetails />} />
            <Route key="1" path="/createactivity" element={<ActivityForm />} />
            <Route key="2" path="/manage/:id" element={<ActivityForm />} />
            <Route path="/errors" element={<TestErrors />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NotFound/>} />
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
