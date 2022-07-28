import React, { useState } from "react";
import Calendar from "react-calendar";

function Finanace() {
  // Calender
  const [date, name] = useState(new Date());
  return (
    <center>
      <header>
        <div>
          <h1>Welcome to Finanace page</h1>
        </div>
      </header>
      <div style={{ maxWidth: "370px" }}>
        <h3>
          <b>Calender</b>
        </h3>
        <div>
          <Calendar onCharge={name} value={date} />
        </div>
      </div>
    </center>
  );
}

export default Finanace;
