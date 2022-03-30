import QUERY_ALL_INVOICES from "@queries/allInvoices.graphql";
import QUERY_ALL_EXPENSES from "@queries/allExpenses.graphql";

import { GetExpensesQuery, GetInvoicesQuery } from "./../../generated/graphql";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

interface IProps {
  client: ApolloClient<NormalizedCacheObject>;
}

export const queryAllInvoices = async ({ client }: IProps) => {
  const { data }: { data: GetInvoicesQuery } = await client.query({
    query: QUERY_ALL_INVOICES,
  });
  return data.invoices;
};

export const queryAllExpenses = async ({ client }: IProps) => {
  const { data }: { data: GetExpensesQuery } = await client.query({
    query: QUERY_ALL_EXPENSES,
  });
  return data.expenses;
};
