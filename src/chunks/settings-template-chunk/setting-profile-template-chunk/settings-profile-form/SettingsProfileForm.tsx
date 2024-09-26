import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoginSchema, ProfileSchema } from "schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SettingsProfileForm = () => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      date_of_birth: "",
      gender: "",
    },
  });
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <Form {...form}>
      <form onSubmit={} action=""></form>
    </Form>
  );
};

export default SettingsProfileForm;
