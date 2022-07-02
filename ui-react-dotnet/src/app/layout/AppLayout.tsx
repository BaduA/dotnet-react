import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const AppLayout = ({ admin }:{admin:boolean}) =>
  admin ? (
    <>
      <Navbar></Navbar>
      <div className="dashboard-container">
        <Outlet></Outlet>
      </div>
    </>
  ) : null;
