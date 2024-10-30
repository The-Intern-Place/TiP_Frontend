import React from "react";
import CustomCheckbox from "@/components/inputs/checkbox/CustomCheckbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NotificationSchema } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import Button from "@/components/button/Button";

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
          <div className="flex flex-row gap-6 md:w-[540px]">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <CustomCheckbox
                label="Applications"
                description="These notifications for jobs you have applied to."
              />
              <CustomCheckbox
                label="Jobs"
                description="These are notifications for job openings that suit your profile"
              />
              <CustomCheckbox
                label="Recommendations"
                description="These are notifications for personalized recommendations from recruiters"
              />
              <div className="w-[169px] flex justify-end ml-auto">
                <Button overrideStyles="" type="submit">
                  Apply Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsNotificationCheckboxForm;
