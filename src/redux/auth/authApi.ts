import api from "../api";

const AuthApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query: (data: any) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: any) => ({
        url: `/auth/signin`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = AuthApi;
