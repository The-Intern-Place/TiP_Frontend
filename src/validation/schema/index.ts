import * as z from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Invalid email! Please enter a valid mail",
  }),
  date_of_birth: z.date({
    message: "A date of birth is required.",
  }),
  //   password: z.string().refine(
  //     (password) => {
  //       const hasCapitalLetter = /[A-Z]/.test(password);
  //       const hasSmallLetter = /[a-z]/.test(password);
  //       const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  //       const hasNumber = /\d/.test(password);

  //       return hasCapitalLetter && hasSmallLetter && hasSymbol && hasNumber;
  //     },
  //     {
  //       message:
  //         "Invalid password. Must contain at least one capital letter, one small letter, a symbol, and a number",
  //     }
  //   ),
  //   confirm_password: z.string().refine(
  //     (password) => {
  //       const hasCapitalLetter = /[A-Z]/.test(password);
  //       const hasSmallLetter = /[a-z]/.test(password);
  //       const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  //       const hasNumber = /\d/.test(password);

  //       return hasCapitalLetter && hasSmallLetter && hasSymbol && hasNumber;
  //     },
  //     {
  //       message:
  //         "Invalid password. Must contain at least one capital letter, one small letter, a symbol, and a number",
  //     }
  //   ),
  mobile_number: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value), {
      message: "Invalid mobile number",
    }),
  gender: z.string().refine(
    (gender) => {
      const allowedGenders = ["male", "female", "prefer not to say"];
      return allowedGenders.includes(gender);
    },
    {
      message:
        "Invalid gender. Must be one of: male, female, prefer not to say",
    }
  ),
});

export const LoginSchema = z.object({
  confirm_email: z.string().email({
    message: "Invalid email! Please enter a valid mail",
  }),
  old_password: z.string().refine(
    (password) => {
      const hasCapitalLetter = /[A-Z]/.test(password);
      const hasSmallLetter = /[a-z]/.test(password);
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      const hasNumber = /\d/.test(password);

      return hasCapitalLetter && hasSmallLetter && hasSymbol && hasNumber;
    },
    {
      message:
        "Invalid password. Must contain at least one capital letter, one small letter, a symbol, and a number",
    }
  ),
  new_password: z.string().refine(
    (password) => {
      const hasCapitalLetter = /[A-Z]/.test(password);
      const hasSmallLetter = /[a-z]/.test(password);
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      const hasNumber = /\d/.test(password);

      return hasCapitalLetter && hasSmallLetter && hasSymbol && hasNumber;
    },
    {
      message:
        "Invalid password. Must contain at least one capital letter, one small letter, a symbol, and a number",
    }
  ),
});

export const NotificationSchema = z.object({
  applications: z.boolean().default(false).optional(),
  jobs: z.boolean().default(false).optional(),
  recommendations: z.boolean().default(false).optional(),
});
