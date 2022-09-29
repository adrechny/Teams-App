import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamMembers({
  employees,
  handleEmployeeCardClick,
  selectedTeam,
}) {
  return employees.map((employees) => (
    <TeamMemberCard
      employees={employees}
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
}
