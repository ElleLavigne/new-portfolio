"use client";
import { CardProject } from "@/components/card-project";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <motion.div
      className="flex flex-col container mx-0 justify-center gap-11"
      initial={{ opacity: 0, y: 40 }}     // começa invisível e mais embaixo
      whileInView={{ opacity: 1, y: 0 }}  // aparece ao entrar na tela
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}           // anima só na 1ª vez
    >
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-zinc-950 font-medium">Meus Projetos</h2>
        <Separator />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }, // delay entre os cards
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <CardProject />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <CardProject />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

