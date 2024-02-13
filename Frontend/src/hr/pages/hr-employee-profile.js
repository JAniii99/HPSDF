import React from "react";
import CollapseBar from "../../layouts/collapse-bar";
import Tab from "../../components/tabs";
import HREmployeePersonalData from "../components/hr-employee-personal-data";
import HRIndividualLeaveRegister from "../components/hr-employee-individual-leave-register";
import HREmployeeAttendantSheet from "../components/hr-employee-individual-attendance-sheet";
import HREmployeeCard from "../components/hr-employee-card";
import { useLocation } from "react-router-dom";
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import {
  FaBriefcase,
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaFile,
} from "react-icons/fa";

function HREmployeeProfile() {
  const location = useLocation();
  const employee = location.state;


  const data = [
    {
      id: 1,
      active: true,
      title: "Personal Data",
      icon: HiUserCircle,
      content: <HREmployeePersonalData personalData={employee} />,
    },
    {
      id: 2,
      active: true,
      title: "Job Data",
      icon: FaBriefcase,
      content: <HREmployeeAttendantSheet />,
    },
    {
      id: 3,
      active: true,
      title: "Personal File",
      icon: FaFile,
      content: <HREmployeeAttendantSheet />,
    },
    {
      id: 4,
      active: true,
      title: "Attendance Data",
      icon: FaCalendarCheck,
      content: <HREmployeeAttendantSheet />,
    },
    {
      id: 5,
      active: true,
      title: "Leave Data",
      icon: FaUmbrellaBeach,
      content: <HRIndividualLeaveRegister />,
    },
  ];
  return (
    <main>
      <CollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase mx-5">
          Employee Profile
        </h3>
        <div className="grid md:grid-cols-3  gap-10 items-center">
          <div>
            <HREmployeeCard
              imageUrl={employee.image}
              name={employee.nameWithInitials}
              designation={employee.designation}
              contact={employee.mobileNo}
              key={employee.nicNo}
            />
          </div>
          <div>
            <fieldset className="border rounded-lg p-5 flex gap-20">
              <legend>Edit</legend>
              <Button color="success" pill className="uppercase">
                Edit Profile
              </Button>
              <Button color="failure" pill className="uppercase">
                Reset Password
              </Button>
            </fieldset>
          </div>
          <div>
            <fieldset className="border rounded-lg p-5 flex gap-20 ">
              <legend>Change User Credentials</legend>
              <FloatingLabel
                variant="filled"
                label={"Username"}
                value={"Chani/hak/123"}
                disabled={true}
              />
              <Button color="failure" pill className="uppercase h-11">
                Reset Password
              </Button>
            </fieldset>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <Tab para={data} />
        </div>
      </div>
    </main>
  );
}

export default HREmployeeProfile;
