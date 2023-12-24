"use client";
import { useGetAllformQuery } from "@/redux/quizApi/quizApi";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const useQuizList = (): any => {
  const { data, isLoading } = useGetAllformQuery({});
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken") || "";
    const body: { role: string } = jwtDecode(token);
    setRole(body.role);
  }, []);
  return { data, isLoading, role };
};

export default useQuizList;
