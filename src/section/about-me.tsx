"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <motion.div
      className="container mx-auto flex flex-col gap-11"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-zinc-950 font-medium">Sobre Mim</h3>
        <Separator />
      </motion.div>

      <motion.div
        className="flex gap-16 justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-[360px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            alt="Foto minha"
            width={360}
            height={360}
            src={"/eu.png"}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium text-zinc-950">Minha Jornada</h3>
          <div className="flex flex-col gap-3 max-w-[596px]">
            <p className="text-[14px]">
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
