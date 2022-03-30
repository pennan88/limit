import {
  ExpenseEntity,
  ExpenseEntityResponseCollection,
  InvoiceEntity,
  InvoiceEntityResponseCollection,
} from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { queryAllExpenses, queryAllInvoices } from "shared/utils/queries";
import Chart from "../../Components/Statisticschart";

interface DashboardProps {
  invoice: InvoiceEntityResponseCollection;
  expense: ExpenseEntityResponseCollection;
}

const Dashboard = ({ invoice, expense }: DashboardProps) => {
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
      <Chart variant="invoice" props={{ invoice }} className={"chart p-1"} />
      <Chart variant="expense" props={{ expense }} className="chart p-1" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  const invoiceData = await queryAllInvoices({
    client: client,
  });
  const expenseData = await queryAllExpenses({
    client: client,
  });

  return {
    props: {
      invoice: invoiceData,
      expense: expenseData,
    },
  };
};

export default Dashboard;
