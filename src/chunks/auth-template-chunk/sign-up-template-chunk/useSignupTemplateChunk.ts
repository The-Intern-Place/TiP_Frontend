import axios from "axios";
import { ListItem } from "@/components/inputs/select-input/SelectInput.types";
import { ISignUpInput } from "@/interfaces/user.interface";
import { useSignUpMutation } from "@/services/auth/auth.service";
import { showToast } from "@/utils/config/toastConfig";
import { setToken } from "@/utils/helpers/auth";
import { signUpResolver } from "@/validation/auth.schema";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function useSignupTemplateChunk() {
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  const [handleSignUpSubmit, { isLoading: signingUp }] = useSignUpMutation();

  const form = useForm<ISignUpInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      code: "",
    },
    mode: "onChange",
    resolver: signUpResolver,
  });

  const countryOptions: ListItem[] =
    countries?.map((country: any) => {
      return {
        id: country.dial_code as string,
        name: `${country.name} (${country.dial_code})`,
      };
    }) ?? [];

  useEffect(() => {
    const handleGetAllCountries = async () => {
      try {
        const request = await axios.get(
          `${process.env.NEXT_PUBLIC_COUNTRIES_API}`
        );

        const res = await request.data;
        if (res.data) {
          setCountries(res.data);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    };

    handleGetAllCountries();
  }, []);

  const handleSubmitForm = async (data: ISignUpInput) => {
    try {
      const payload = {
        fname: data.firstName,
        lname: data.lastName,
        email: data.email,
        password: data.password,
        dateOfBirth: "1990-05-15T08:00:00",
        gender: "female",
        location: "Nigeria",
        countryCode: data.code,
        phoneNumber: data.phone,
      };
      const res = await handleSignUpSubmit(payload).unwrap();
      if (res?.status === "success") {
        setToken(res?.token);
        showToast({
          msg: "Sign up successful",
          type: "SUCCESS",
        });
        router.push("/login");
      }
    } catch (error) {
      showToast({
        msg: "Error siging up",
        type: "ERROR",
      });
    }
  };

  return {
    countries,
    handleSubmitForm,
    form,
    signingUp,
    countryOptions,
  };
}
