import { z } from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      nom: z.string().min(3, "name too short"),
      prenom: z.string().min(3, "name too short"),
      
      mail: z.string().email(),
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
      
      mail: z.string().email().optional(),
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
      mail: z.string().email(),
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});