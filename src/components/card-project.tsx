"use client";

import Image from "next/image";
import cover from "../assets/cover-agnes-glam.png";
import { Button } from "./ui/button";

export function CardProject() {
  return (
    <div className="max-w-[544px] grid gap-6 ">
      <Image src={cover} alt=""></Image>

      <div className="">
        <h3 className="text-zinc-950 font-medium">Design Ecommerce</h3>
        <p className="text-zinc-600">
          Página principal de um ecommerce para loja de sófas.{" "}
        </p>
      </div>
      <div className="flex gap-4">
        <Button className="py-4">Figma</Button>
        <Button>Github</Button>
      </div>
    </div>
  );
}
