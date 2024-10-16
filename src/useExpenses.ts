import { useQuery } from "@tanstack/react-query";

const useExpenses = () => {
  return useQuery({
    queryKey: ["expanses"],
    queryFn: () =>
      fetch("https://tip-transactions.vercel.app/api/transactions?page=1").then(
        (res) => res.json()
      ),
  });
};

export default useExpenses;
