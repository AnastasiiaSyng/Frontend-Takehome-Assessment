import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExpensesTable from "./components/ExpensesTable";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Expenses</h1>
        <ExpensesTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
