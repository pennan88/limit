import React, { useState } from "react";
import Chart from "../../Components/Statisticschart";

const Dashboard = () => {
  const [active, setActive] = useState(false);

  const handleClass = () => {
    if (active === true) {
      return "active";
    } else {
      return "deactive";
    }
  };
  return (
    <div className="dashboard bg-secondary mb-2">
      <div className="tabs display-f mb-1">
        <div className={`${handleClass()}`} onClick={() => setActive(!active)}>
          Home
        </div>
        <div>Add invoices</div>
        <div>Add Expense</div>
        <div>Previous budget</div>
      </div>
      <Chart
        className="chart p-1"
        title={"INCOME"}
        content={"LÖN"}
        amount={35000}
      />

      <Chart
        className="chart p-1"
        title={"EXPENSES"}
        content={"LÖN"}
        amount={-35000}
      />
      <Chart
        className="chart p-1"
        title={"SAVINGS"}
        content={"LÖN"}
        amount={35000}
      />
    </div>
  );
};

export default Dashboard;
