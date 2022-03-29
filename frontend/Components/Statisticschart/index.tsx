import React from "react";

interface ChartTypes {
  title: string;
  content: string;
  amount: number;
  className: string;
}

const Chart = ({ title, content, amount, className }: ChartTypes) => {
  const total = 0;

  const amountColor = () => {
    if (amount < 0) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <div className={className}>
      <h3 className="title">{title}</h3>
      <div className="chart__table-top chart__table mb-1">
        <p>income name</p>
        <p>value </p>
      </div>
      <div className="chart__table-middle chart__table">
        <ul>
          <li>
            <p>{content}</p>
            <p className={`${amountColor()}`}>{amount.toFixed(2)}</p>
          </li>
          <hr className="mb-1" />
        </ul>
      </div>
      <div className="chart__table-bottom chart__table mt-1">
        <p>TOTAL AMOUNT </p>
        <p>{total} </p>
      </div>
    </div>
  );
};

export default Chart;
