import Link from "next/link";

export function Header() {
  return (
    <header className="container flex items-center justify-between mx-auto mt-11">
      <h1 className="font-semibold">Izaelle Lavigne</h1>
      <div className="flex gap-6 ">
        <Link
          className="text-zinc-950 font-medium  hover:text-zinc-600"
          href={""}
        >
          Contato
        </Link>
        <Link
          className="text-zinc-950 font-medium  hover:text-zinc-600"
          href={""}
        >
          Currículo
        </Link>
        <Link
          className="text-zinc-950 font-medium  hover:text-zinc-600"
          href={""}
        >
          Sobre Mim
        </Link>
      </div>
    </header>
  );
}
