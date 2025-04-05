"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormField from "@/components/FormField";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

const aformSchema = (type: String) => {
  return z.object({
    name: type === "signup" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: String }) => {
  // 1. Define your form.
  const router = useRouter();
  const formSchema = aformSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isLogin = type === "login";
  console.log(isLogin);
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log("Signup", values);
        toast.success("Account created Successfully!");
        router.push("/");
      } else if (type === "login") {
        console.log("Login", values);
        toast.success("Logged in Successfully!");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Uh-oh Error : ${error}`);
    }
  }
  return (
    <div className="card-border lg:min-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logooo.png" alt="logo" height={32} width={38} />
          <h2 className=" text-primary-500">IntervuAI</h2>
        </div>
        <h3>Your personal AI Interviewer</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full space-y-6 mt-4 form"
          >
            {!isLogin && (
              <FormField
                name={"name"}
                label="Name"
                control={form.control}
                placeholder="Jane Doe"
              />
            )}
            <FormField
              name={"email"}
              label="Email"
              control={form.control}
              placeholder="abc@gmail.com"
              type="email"
            />
            <FormField
              name={"password"}
              label="Password"
              control={form.control}
              placeholder="abc#456"
              type="password"
            />
            <Button className="btn" type="submit">
              {isLogin ? "Login" : "Sign-Up"}
            </Button>
          </form>
        </Form>
        <p className=" text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link
            className=" font-bold text-user-primrary ml-1"
            href={isLogin ? "/signup" : "/login"}
          >
            {isLogin ? "Sign-up" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
