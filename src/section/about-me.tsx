import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="container mx-auto flex flex-col gap-11">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font text-zinc-950">Sobre Mim</h3>
        <Separator />
      </div>

      <div className="flex gap-16 justify-center items-center">
        <div className=" max-w-[360px]">
          <Image
            className=""
            alt=""
            width={360}
            height={360}
            src={"/eu.png"}
          ></Image>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-medium text-zinc-950">Minha Jornada</h3>
          <div className="flex flex-col gap-3 max-w-[596px]">
            <p className="text-[14px] ">
              Sou estudante de Análise e Desenvolvimento de Sistemas e desde o
              ensino médio técnico em Informática tive meu primeiro contato com
              programação, o que despertou meu interesse em seguir carreira na
              área de tecnologia. Para aprofundar meus conhecimentos, realizei o
              curso de Front-end da Rocketseat, com foco em React, além de
              formação Full Stack.
            </p>
            <p>
              Durante minha trajetória, também desenvolvi interesse por Design,
              especializando-me na criação de interfaces para sites e
              aplicativos. Hoje, uno minhas habilidades técnicas e criativas
              para construir soluções digitais que aliam performance,
              usabilidade e uma experiência visual atrativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
