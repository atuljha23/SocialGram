import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name Too Short" })
    .max(50, { message: "Name Too Long" }),
  username: z
    .string()
    .min(2, { message: "Username Too Short" })
    .max(50, { message: "Username Too Long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
