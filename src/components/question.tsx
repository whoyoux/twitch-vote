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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Question } from "./vote-form";
import { useMemo, useState } from "react";

type Props = {
  question: Question;
};

const extractAnswers = (question: Question) => {
  const answers = [] as string[];
  question.answers.forEach((answer) => {
    answers.push(answer.text);
  });

  return [answers[0], ...answers.splice(1)];
};

const QuestionForm = ({ question }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({} as z.infer<typeof FormSchema>);

  const [firstAnswer, ...restAnswers] = useMemo(
    () => extractAnswers(question),
    [question]
  );

  const FormSchema = z.object({
    type: z.enum([firstAnswer, ...restAnswers], {
      required_error: "Please select an answer",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
    setShowModal(true);
    setData(data);
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">{question.question}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col gap-2"
                  >
                    {question.answers.map((answer) => (
                      <FormItem
                        className="flex flex-row gap-4 items-center py-6 px-6 w-full border border-secondary rounded-lg cursor-pointer group hover:bg-secondary hover:border-secondary"
                        key={answer.text}
                      >
                        <FormControl>
                          <RadioGroupItem value={answer.text} />
                        </FormControl>
                        <FormLabel className="text-xl font-semibold cursor-pointer w-full">
                          {answer.text}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Zaznaczyles odpowiedz:</DialogTitle>
            <DialogDescription asChild>
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuestionForm;
