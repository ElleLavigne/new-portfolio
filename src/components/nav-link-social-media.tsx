"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Envelope, GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function SocialMedia() {
  return (
    <div className="flex gap-8 items-center justify-center">
      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer">
          <LinkedinLogo size={20} />
          LinkedIn
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer">
          <WhatsappLogo size={20} />
          Whatsapp
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer">
          <Envelope size={20} />
          Email
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center cursor-pointer">
          <GithubLogo size={20} />
          Github
        </Button>
      </Link>
    </div>
  );
}
