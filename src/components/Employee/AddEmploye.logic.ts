/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useAddformMutation } from "@/redux/quizApi/quizApi";
import {
  Iresponse,
  Quiz,
  form_init_data,
  form_type,
  option_breaker,
  quiz_init_state,
} from "@/types/commonTypes";
import { message } from "antd";
import React, { useState } from "react";

const ueAddEmploye = () => {
  const [formData, setFormData] = useState<form_type>({ ...form_init_data });
  const [quiz, setQuiz] = useState<Quiz>({ ...quiz_init_state });
  const [quizError, setQuizError] = useState("");
  const [submitForm, { isLoading }] = useAddformMutation();

  const setformDataTitle = (e: any) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const setQuizData = (e: any) => {
    if (e.target.name === "marks") {
      setQuiz({
        ...quiz,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setQuiz({
        ...quiz,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "ans") {
      setQuizError("");
    }
  };

  const addNewOption = () => {
    setQuiz({
      ...quiz,
      options: [...(quiz.options as string[]), quiz.option as string],
      option: "",
    });
  };

  const trackEnterKey = (e: any) => {
    if (e.target.name === "option" && e.keyCode === 13) {
      addNewOption();
    }
  };

  const deleteOption = (i: number) => {
    const newOptions = (quiz.options as string[]).filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });
    setQuiz({
      ...quiz,
      options: newOptions,
    });
  };

  const addQuiz_into_form = (e: any) => {
    e.preventDefault();
    console.log(quiz);
    if (!quiz.ans || (quiz.options as string[]).length < 2) {
      setQuizError("You have to set minimum 2 option and set an answer");
      return;
    } else {
      setFormData({
        ...formData,
        quizes: [...formData.quizes, quiz],
      });
      setQuiz(quiz_init_state);
    }
  };

  const delete_form_quiz = (index: number) => {
    const new_quizes = formData.quizes.filter((item, i) => {
      if (i !== index) return item;
    });
    setFormData({
      ...formData,
      quizes: new_quizes,
    });
  };

  const saveToDatabase = async () => {
    console.log("oldform", formData);
    const new_quizes = formData.quizes.map((item) => {
      const newItem = { ...item };
      delete newItem.option;
      newItem.options = (item.options as string[])?.join(option_breaker);
      return newItem;
    });

    const new_forms = { title: formData.title, quizes: new_quizes };
    const res = (await submitForm(new_forms)) as Iresponse;
    if (res.data.success) {
      message.success("forms created successfully");
      setFormData({ ...form_init_data });
    } else {
      message.error("filed to save database");
    }
  };
  return {
    formData,
    quiz,
    setformDataTitle,
    setQuizData,
    addNewOption,
    trackEnterKey,
    deleteOption,
    addQuiz_into_form,
    quizError,
    delete_form_quiz,
    saveToDatabase,
    isLoading,
  };
};

export default ueAddEmploye;
