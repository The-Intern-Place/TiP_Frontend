import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { NotificationSchema } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

const SettingsNotificationCheckboxForm = () => {
  const form = useForm<z.infer<typeof NotificationSchema>>({
    resolver: zodResolver(NotificationSchema),
    defaultValues: {
      applications: true,
      jobs: true,
      recommendations: true,
    },
  });

  function onSubmit(data: z.infer<typeof NotificationSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="">
      <div className="md:border-b-[1px] border-b-0">
        <div className="md:py-8 flex flex-col md:flex-row md:w-[916px] justify-between">
          <div className="flex flex-col md:w-[270px]">
            <h1 className="hidden md:inline-flex text-base md:text-[18px] font-semibold font-epilogue">
              Notifications
            </h1>
            <p className="hidden md:inline text-base font-normal font-epilogue text-[#515B6F]">
              Customize your preferred notification setting
            </p>
          </div>
          {/* checkboxes */}
          <div className=" flex flex-row gap-6 md:w-[540px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="applications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                          Applications
                        </FormLabel>
                        <FormDescription className="text-[#515B6F] text-base font-epilogue">
                          These notifications for jobs you have applied to.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobs"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                          Jobs
                        </FormLabel>
                        <FormDescription className="text-[#515B6F] text-base font-epilogue">
                          These are notifications for job openings that suit
                          your profile
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recommendations"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                          Recommendations
                        </FormLabel>
                        <FormDescription className="text-[#515B6F] text-base font-epilogue">
                          These are notifications for personalized
                          recommendations from recruiters
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end">
                  <Button className="bg-blue " type="submit">
                    Apply Changes
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsNotificationCheckboxForm;
