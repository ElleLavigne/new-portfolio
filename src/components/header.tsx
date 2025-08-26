import Link from "next/link";

export function Header() {
  return (
    <header className="container flex items-center justify-center mx-auto mt-11 md:justify-between">
      <h1 className="font-semibold hidden md:block">Izaelle Lavigne</h1>
      <div className="flex gap-4  md:gap-6">
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
        <Link
          className="text-zinc-950 font-medium  hover:text-zinc-600"
          href="#sobre-mim"
        >
          Sobre Mim
        </Link>
      </div>
    </header>
  );
}
