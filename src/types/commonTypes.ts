export type Quiz = {
  type: string;
  options?: string[] | string;
  option?: string;
  title: string;
  description: string;
  marks: number;
  ans: string;
  image: string;
};
export const quiz_init_state = {
  type: "radio",
  options: [],
  option: "",
  title: "",
  description: "",
  marks: 1,
  ans: "",
  image: "",
};

export type form_type = {
  title: string;
  quizes: Quiz[];
};

export const form_init_data = {
  title: "",
  quizes: [],
};

export const option_breaker = "-_--_-";

export type Iresponse = {
  data: {
    success: string;
  };
};
