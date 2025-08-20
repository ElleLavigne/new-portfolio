"use client";

import Image from "next/image";
import cover from "../assets/cover-agnes-glam.png";
import { Button } from "./ui/button";
import { IProjects } from "@/schema/projects";

export type ICardProject = {
  project: IProjects;
};

export function CardProject({ project }: ICardProject) {
  return (
    <div className="max-w-[544px] grid gap-6 ">
      <Image src={cover} alt=""></Image>

      <div className="">
        <h3 className="text-zinc-950 font-medium">{project.title}</h3>
        <p className="text-zinc-600">{project.description}</p>
      </div>
      <div className="flex gap-4">
        <Button className="rounded-[4px] px-4 cursor-pointer">Figma</Button>
        <Button
          variant="ghost"
          className="bg-zinc-200 rounded-[4px] cursor-pointer"
        >
          Github
        </Button>
      </div>
    </div>
  );
}
