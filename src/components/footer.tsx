import Link from "next/link";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-zinc-100 flex flex-col ">
      <div className="container flex pt-8  pb-16 justify-between mx-auto">
        <div className="flex flex-col gap-1">
          <h4 className="text-zinc-950 font-medium">Izaelle Lavigne</h4>
          <p className="text-zinc-400 text-[14px]">
            UI Design e Desenvolvedora Frontend
          </p>
        </div>

        <div className="flex gap-6 ">
          <Link
            className="text-zinc-950 font-medium  hover:text-zinc-600"
            href={"https://wa.me/5586998244011"}
            target="blank"
          >
            Contato
          </Link>
          <Link
            className="text-zinc-950 font-medium  hover:text-zinc-600"
            href={
              "https://drive.google.com/file/d/1ZDJpCRtSl8zbq6Xk1axdgspPkYwWBCAM/view?usp=sharing"
            }
          >
            Currículo
          </Link>
        </div>

        <div className="flex gap-6">
          <Link href={"https://wa.me/5586998244011"}>
            <WhatsappLogo />
          </Link>

          <Link href={"www.linkedin.com/in/izaelle-lavigne-18a62427a"}>
            <LinkedinLogo />
          </Link>

          <a href="mailto:izaelleavrillavigne@gmail.com">
            <Envelope />
          </a>

          <Link href={"https://github.com/ElleLavigne"}>
            <GithubLogo />
          </Link>
        </div>
      </div>
      <Separator />
    </footer>
  );
}
