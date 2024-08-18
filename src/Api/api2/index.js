import { useMutation, useQueryClient } from "react-query";
import api from "../../Axios/index";

const fetchApi2 = async () => {
  const { data } = await api.get("/users");
  return data;
};

export function useApi2() {
  const queryClient = useQueryClient();

  return useMutation(fetchApi2, {
    onSuccess: (data) => {
      queryClient.setQueryData("api2Data", data);

      queryClient.invalidateQueries("api1Data");
    },
  });
}
