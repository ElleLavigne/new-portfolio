"use client";

import Image from "next/image";
import cover from "../assets/cover-agnes-glam.png";
import { Button } from "./ui/button";
import { IProjects } from "@/schema/projects";
import Link from "next/link";

export type ICardProject = {
  project: IProjects;
};

export function CardProject({ project }: ICardProject) {
  return (
    <div className="max-w-[544px] grid gap-6 ">
      <Image width={544} height={360} src={project.image} alt=""></Image>

      <div className="">
        <h3 className="text-zinc-950 font-medium">{project.title}</h3>
        <p className="text-zinc-600">{project.description}</p>
      </div>
      <div className="flex gap-4">
        {project.figma && (
          <Link href={project.figma.url} target="_blank">
            <Button className="rounded-[4px] px-4 cursor-pointer">
              {project.figma.label}
            </Button>
          </Link>
        )}
        {project.github && (
          <Link href={project.github.url} target="_blank">
            <Button
              variant="ghost"
              className="rounded-[4px] px-4 cursor-pointer bg-zinc-200"
            >
              {project.github.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
