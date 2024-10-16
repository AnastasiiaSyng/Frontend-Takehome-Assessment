import useExpenses from "../useExpenses";
import dayjs from "dayjs";
import TablePrimitive from "./TablePrimitive";

const ExpensesTable = () => {
  const { data, error } = useExpenses();

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: ({ row }) => (
        <p>{dayjs(row.original.date).format("HH:mm-DD/MM/YYYY")}</p>
      ),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: ({ row }) => <p>{`£${row.original.amount}`}</p>,
    },
    {
      header: "Merchant",
      accessorKey: "merchant",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
  ];

  return (
    <>
      {data ? (
        <TablePrimitive data={data.transactions} columns={columns} />
      ) : null}
      {error ? <p>Error</p> : null}
    </>
  );
};

export default ExpensesTable;
