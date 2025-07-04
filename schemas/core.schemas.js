import { z } from "zod";

export const getByIdSchema = z.object({
  params: z
    .object({
      id: z.string().max(30),
    })
    .strict(),
});