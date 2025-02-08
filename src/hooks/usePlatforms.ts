import { QueryKey, useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

const usePlatforms = () =>  useQuery<FetchResponse<Platform>, Error>({
  queryKey: ["platforms"],
  queryFn: () => apiClient.getAll({}),
  initialData: platforms,
  staleTime: 24*60*60*1000
});

export default usePlatforms;
