import z from "zod";

export const zProjects = z.object({
  id: z.string(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
  figma: z
    .object({
      label: z.string(),
      url: z.string().url(),
    })
    .optional(),
  github: z
    .object({
      label: z.string(),
      url: z.string().url(),
    })
    .optional(),
});

export type IProjects = z.infer<typeof zProjects>;
