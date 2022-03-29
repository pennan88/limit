import React, { HTMLAttributes } from "react";

interface DashboardType extends HTMLAttributes<HTMLDivElement> {}

const Dashboardwindow = ({ children, className, ...props }: DashboardType) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Dashboardwindow;
