import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex justify-between">
      <Image alt="" src={""}></Image>
      <p className="text-[14px]">
        Sou estudante de Análise e Desenvolvimento de Sistemas e desde o ensino
        médio técnico em Informática tive meu primeiro contato com programação,
        o que despertou meu interesse em seguir carreira na área de tecnologia.
        Para aprofundar meus conhecimentos, realizei o curso de Front-end da
        Rocketseat, com foco em React, além de formação Full Stack. Durante
        minha trajetória, também desenvolvi interesse por Design,
        especializando-me na criação de interfaces para sites e aplicativos.
        Hoje, uno minhas habilidades técnicas e criativas para construir
        soluções digitais que aliam performance, usabilidade e uma experiência
        visual atrativa.
      </p>
    </div>
  );
}
