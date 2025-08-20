import z from "zod";

export const zProjects = z.object({
  id: z.string(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
  figmaUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
});

export type IProjects = z.infer<typeof zProjects>;
