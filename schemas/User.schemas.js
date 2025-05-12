import { z } from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      
      email: z.string().email(),
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});

export const updateUserSchema = z.object({
  body: z
    .object({
      
      email: z.string().email().optional(),
    })
    .strict(),
  params: z
    .object({
      id: z.string().uuid(),
    })
    .strict(),
});

export const updatePassword = z.object({
  body: z
    .object({
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});

export const loginSchema = z.object({
  body: z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});