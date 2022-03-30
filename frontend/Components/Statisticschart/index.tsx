import {
  ExpenseEntityResponseCollection,
  InvoiceEntityResponseCollection,
} from "generated/graphql";
import React, { useEffect, useState } from "react";

interface ChartTypes {
  className: string;
  variant: "invoice" | "expense" | "savings";
  props: {
    invoice?: InvoiceEntityResponseCollection;
    expense?: ExpenseEntityResponseCollection;
  };

  // props: InvoiceEntityResponseCollection | ExpenseEntityResponseCollection;
}

const Chart = ({ className, variant, props }: ChartTypes) => {
  const total = 0;
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  console.log(props.invoice?.data);
  const amountColor = (amount: number) => {
    if (amount < 0) {
      return "red";
    } else {
      return "green";
    }
  };

  useEffect(() => {
    const invoiceSum = props.invoice?.data
      .map((price) => price.attributes?.Amount!)
      .reduce((a, b) => a + b, 0);
    setTotalInvoice(invoiceSum!);
    const expenseSum = props.expense?.data
      .map((price) => price.attributes?.Amount!)
      .reduce((a, b) => a + b, 0);
    setTotalExpense(expenseSum!);
  }, [props.expense]);

  switch (variant) {
    case "invoice": {
      return (
        <div className={className}>
          <h3 className="title">{"INVOICE"}</h3>
          <div className="chart__table-top chart__table mb-1">
            <p>income name</p>
            <p>value </p>
          </div>
          <div className="chart__table-middle chart__table">
            <ul>
              {props.invoice?.data.map(({ attributes }, index) => {
                return (
                  <>
                    <li key={index}>
                      <p>{attributes?.Name}</p>
                      <p className={`${amountColor(attributes?.Amount!)}`}>
                        {attributes?.Amount!.toFixed(2)}:-
                      </p>
                    </li>
                    <hr className="mb-1" />
                  </>
                );
              })}
            </ul>
          </div>
          <div className="chart__table-bottom chart__table mt-1">
            <p>TOTAL AMOUNT </p>
            <p
              className={`${amountColor(
                props.invoice?.data[0].attributes?.Amount!
              )}`}
            >
              {totalInvoice}:-
            </p>
          </div>
        </div>
      );
    }

    case "expense": {
      return (
        <div className={className}>
          <h3 className="title">{"EXPENSE"}</h3>
          <div className="chart__table-top chart__table mb-1">
            <p>income name</p>
            <p>value </p>
          </div>
          <div className="chart__table-middle chart__table">
            <ul>
              {props.expense?.data.map(({ attributes }, index) => {
                return (
                  <>
                    <li key={index}>
                      <p>{attributes?.Name}</p>
                      <p className={`${amountColor(attributes?.Amount!)}`}>
                        {attributes?.Amount!.toFixed(2)}:-
                      </p>
                    </li>
                    <hr className="mb-1" />
                  </>
                );
              })}
            </ul>
          </div>
          <div className="chart__table-bottom chart__table mt-1">
            <p>TOTAL AMOUNT </p>
            <p
              className={`${amountColor(
                props.expense?.data[0].attributes?.Amount!
              )}`}
            >
              {totalExpense}:-
            </p>
          </div>
        </div>
      );
    }

    case "savings": {
      return (
        <div className={className}>
          <h3 className="title">{"EXPENSE"}</h3>
          <div className="chart__table-top chart__table mb-1">
            <p>income name</p>
            <p>value </p>
          </div>
          <div className="chart__table-middle chart__table">
            <ul>
              {props.expense?.data.map(({ attributes }, index) => {
                return (
                  <>
                    <li key={index}>
                      <p>{attributes?.Name}</p>
                      <p className={`${amountColor(attributes?.Amount!)}`}>
                        {attributes?.Amount!.toFixed(2)}
                      </p>
                    </li>
                    <hr className="mb-1" />
                  </>
                );
              })}
            </ul>
          </div>
          <div className="chart__table-bottom chart__table mt-1">
            <p>TOTAL AMOUNT </p>
            <p>{total} </p>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
};

export default Chart;
