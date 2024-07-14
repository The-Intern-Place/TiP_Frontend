import { ILoginDTO } from "@/services/auth/auth.interface";
import { useLoginMutation } from "@/services/auth/auth.service";
import { showToast } from "@/utils/config/toastConfig";
import { setToken } from "@/utils/helpers/auth";
import { loginResolver } from "@/validation/auth.schema";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function useLoginTemplateChunk() {
  const [handleLoginIn, { isLoading: loggingIn }] = useLoginMutation();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: loginResolver,
  });

  const handleSubmitForm = async (data: ILoginDTO) => {
    try {
      const res = await handleLoginIn(data).unwrap();
      if (res.status === "success") {
        setToken(res.token);
        showToast({
          msg: `Log in successful`,
          type: "SUCCESS",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      showToast({
        msg: `Error siging up: ${error}`,
        type: "ERROR",
      });
    }
  };

  return {
    form,
    handleSubmitForm,
    loggingIn,
  };
}
