"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Envelope, GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function SocialMedia() {
  return (
    <div className="flex gap-8 items-center justify-center">
      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center">
          <LinkedinLogo size={20} />
          LinkedIn
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center">
          <WhatsappLogo size={20} />
          Whatsapp
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center">
          <Envelope size={20} />
          Email
        </Button>
      </Link>

      <Link href={""}>
        <Button className="shine text-zinc-950 hover:bg-zinc-200 rounded-3xl flex gap-2 items-center">
          <GithubLogo size={20} />
          Github
        </Button>
      </Link>
    </div>
  );
}
