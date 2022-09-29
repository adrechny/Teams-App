import React from "react";

export default function Footer() {
  var today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>Team Member Allocation - {today.getFullYear()}</h5>
          <div className="info">
            This project was coded by Allison Drechny and is{" "}
            <a
              href="https://github.com/adrechny/Teams-App"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
