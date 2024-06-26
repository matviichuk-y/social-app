import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too short name, must be at least 2 characters" }),
  username: z.string().min(2, { message: "Too short username, must be at least 2 characters" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short password, must be at least 8 characters" }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short password, must be at least 8 characters" }),
});
