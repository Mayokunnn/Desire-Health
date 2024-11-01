import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser} from "../services/users";

export const useUser = () => {
  const queryClient = useQueryClient();
  const userId = queryClient.getQueryData(["userId"]);

  const { isError, isLoading, data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId?.id),
    enabled: !!userId?.id, // Ensure the query runs only if userId is available
  });


  return { isLoading, user, isError };
};
