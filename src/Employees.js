import React from "react";
import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";

export default function Employees({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map(function (employees, index) {
              return (
                <div key={index}>
                  <div
                    id={employees.id}
                    className={
                      employees.teamName === selectedTeam
                        ? "card m-2 standout"
                        : "card m-2"
                    }
                    style={{ cursor: "pointer" }}
                    onClick={handleEmployeeCardClick}
                  >
                    {employees.gender === "male" ? (
                      <img
                        src={maleProfile}
                        className="card-img-top"
                        alt="Generic outline of a faceless man"
                      />
                    ) : (
                      <img
                        src={femaleProfile}
                        className="card-img-top"
                        alt="Generic outline of a faceless woman"
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">
                        Full Name: {employees.fullName}
                      </h5>
                      <p className="card-text">
                        <b>Designation:</b> {employees.designation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
