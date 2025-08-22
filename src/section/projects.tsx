"use client";
import { CardProject } from "@/components/card-project";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export function Projects() {
  const list = projects;

  return (
    <motion.div
      className="flex flex-col container mx-0 justify-center gap-11"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
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

      <div className="grid grid-cols-2 gap-11">
        {list.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} 
            viewport={{ once: true }}
          >
            <CardProject project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

