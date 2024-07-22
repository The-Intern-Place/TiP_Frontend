import { Jobs } from "@/utils/config/apiUrls";
import { configuredApi } from "@/utils/config/createApi";

const jobsApi = configuredApi.enhanceEndpoints({}).injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (params: any) => ({
        url: Jobs.GET_ALL_JOBS,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
    useGetAllJobsQuery
} = jobsApi;
