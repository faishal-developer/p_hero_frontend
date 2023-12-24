import { BaseUrl } from "@/constants/base-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./types/tagTypes";

let accessToken: any;
if (typeof window !== "undefined") {
  accessToken = localStorage?.getItem("accessToken");
}

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (headers) => {
      if (accessToken !== null) {
        headers.set("authorization", accessToken);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});

export default api;
