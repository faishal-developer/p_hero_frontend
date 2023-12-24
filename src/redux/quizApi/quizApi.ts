import api from "../api";

const formApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllform: builder.query({
      query: () => `/form`,
      provideTags: ["form"],
    }),
    getAllQuizMarks: builder.query({
      query: () => `/quizmarks`,
      provideTags: ["quizMarks"],
    }),
    getform: builder.query({
      query: ({ id }: { id: string }) => `/form/${id}`,
    }),
    addform: builder.mutation({
      query: (data: any) => ({
        url: `/form/create-form`,
        method: "POST",
        body: data,
      }),
      invalidateTags: "form",
    }),
    addQuizMarks: builder.mutation({
      query: (data: any) => ({
        url: `/quizmarks/create-quizmarks`,
        method: "POST",
        body: data,
      }),
      invalidateTags: "quizMarks",
    }),
    updateform: builder.mutation({
      query: ({ formId, formData }: { formId: string; formData: any }) => ({
        url: `/form/${formId}`,
        method: "PUT",
        body: formData,
      }),
    }),
    deleteform: builder.mutation({
      query: (id: string) => ({
        url: `/form/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllformQuery,
  useGetformQuery,
  useAddformMutation,
  useUpdateformMutation,
  useDeleteformMutation,
  useGetAllQuizMarksQuery,
  useAddQuizMarksMutation,
} = formApi;
