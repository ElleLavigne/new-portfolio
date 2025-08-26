"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";

export function SocialMedia() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center md:gap-8">
      <Link
        href="https://www.linkedin.com/in/izaelle-lavigne-18a62427a"
        target="_blank"
      >
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105">
          <LinkedinLogo size={20} />
          LinkedIn
        </Button>
      </Link>

      <Link href="https://wa.me/5586998244011" target="_blank">
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105">
          <WhatsappLogo size={20} />
          Whatsapp
        </Button>
      </Link>

      <Link href="mailto:izaelleavrillavigne@gmail.com">
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105">
          <Envelope size={20} />
          Email
        </Button>
      </Link>

      <Link href="https://github.com/ElleLavigne" target="_blank">
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105">
          <GithubLogo size={20} />
          Github
        </Button>
      </Link>
    </div>
  );
}
