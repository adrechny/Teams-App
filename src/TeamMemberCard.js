import React from "react";
import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";

export default function TeamMemberCard({
  employees,
  handleEmployeeCardClick,
  selectedTeam,
}) {
  return (
    <div
      key={employees.id}
      id={employees.id}
      className={
        employees.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employees.gender === "male" ? (
        <img
          src={maleProfile}
          className="card-img-top"
          alt="Generic blank face profile for a man"
        />
      ) : (
        <img
          src={femaleProfile}
          className="card-img-top"
          alt="Generic blank face profile for a woman"
        />
      )}

      <div className="card-body">
        <h5 className="card-title">Full Name: {employees.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employees.designation}
        </p>
      </div>
    </div>
  );
}
