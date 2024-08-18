import { useQuery } from "react-query";
import api from "../../Axios/index";

const fetchApi1 = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export function useApi1() {
  return useQuery("api1Data", fetchApi1);
}
