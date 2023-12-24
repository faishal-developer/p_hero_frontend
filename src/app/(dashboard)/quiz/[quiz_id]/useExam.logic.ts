"use client";
import {
  useAddQuizMarksMutation,
  useGetformQuery,
} from "@/redux/quizApi/quizApi";
import { useEffect, useState } from "react";
import { option_breaker } from "@/types/commonTypes";
import { jwtDecode } from "jwt-decode";

type ItrakAns = {
  [key: string]: string;
};

const useExam = (props: { id: string }) => {
  const { data, isLoading }: any = useGetformQuery({ id: props.id });
  const [current, setCurrent] = useState(0);
  const [trackAns, setTrackAns] = useState<ItrakAns>({});
  const [isSubmitted, setIsSubmitted] = useState<number | null>(null);
  const [SubmitData, { isLoading: loading }] = useAddQuizMarksMutation();
  const [user, setUser] = useState<ItrakAns>({});

  const navigate = (num: number) => {
    if (current === 0 && num === -1) return null;
    else if (current === data?.data.Quiz.length - 1 && num === 1) return null;
    else {
      setCurrent(current + num);
      return current + num;
    }
  };

  const breakString = (str: string) => {
    return str.split(option_breaker);
  };

  const chooseRandomly = (str: string) => {
    const array = breakString(str);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const onRadioChange = (e: any) => {
    setTrackAns({
      ...trackAns,
      [e.target.name]: e.target.value,
    });
    console.log(trackAns);
  };

  const calculateResult = () => {
    let total = 0;
    data?.data?.Quiz.map((item: any) => {
      if (item.ans === trackAns[item.title]) {
        total += item.marks;
      }
    });
    return total;
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const data: any = jwtDecode(token || "");
    setUser(data);
  }, []);

  const SubmitHandler = () => {
    const num = calculateResult();
    setIsSubmitted(num);
    SubmitData({
      user_id: user.id,
      form_id: data.data.id,
      number: num,
    });
  };
  return {
    data,
    isLoading,
    navigate,
    current,
    breakString,
    chooseRandomly,
    onRadioChange,
    trackAns,
    SubmitHandler,
    isSubmitted,
    loading,
  };
};

export default useExam;
