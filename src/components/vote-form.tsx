"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import QuestionForm from "./question";

type Answer = {
  text: string;
};

export type Question = {
  question: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    question: "pytanie nr. 1",
    answers: [
      {
        text: "nr. 1",
      },
      {
        text: "nr. 2",
      },
      {
        text: "nr. 3",
      },
      {
        text: "nr. 4",
      },
    ],
  },
  {
    question: "What is your favorite color?",
    answers: [
      {
        text: "Red",
      },
      {
        text: "Blue",
      },
      {
        text: "Green",
      },
      {
        text: "Yellow",
      },
    ],
  },
  {
    question: "What is your favorite food?",
    answers: [
      {
        text: "Pizza",
      },
      {
        text: "Burger",
      },
      {
        text: "Sushi",
      },
      {
        text: "Tacos",
      },
    ],
  },
  {
    question: "What is your favorite animal?",
    answers: [
      {
        text: "Dog",
      },
      {
        text: "Cat",
      },
      {
        text: "Bird",
      },
      {
        text: "Fish",
      },
    ],
  },
  {
    question: "What is your favorite hobby?",
    answers: [
      {
        text: "Reading",
      },
      {
        text: "Gaming",
      },
      {
        text: "Sports",
      },
      {
        text: "Cooking",
      },
    ],
  },
];

const VoteForm = () => {
  return (
    <div className="flex flex-col gap-8">
      {questions.map((question) => (
        <QuestionForm question={question} key={question.question} />
      ))}
    </div>
  );
};

export default VoteForm;
