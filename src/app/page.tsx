"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMedia } from "@/components/nav-link-social-media";
import { AboutMe } from "@/section/about-me";
import { Projects } from "@/section/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col container mx-auto justify-center items-center gap-48">
        <Header />
        <div className="flex flex-col gap-14 ">
          <div className="flex flex-col max-w-[907px] items-center text-center gap-8">
            <motion.h1
              className="font-medium text-5xl text-zinc-950"
              initial={{ opacity: 0, y: 30 }} // começa invisível e mais abaixo
              animate={{ opacity: 1, y: 0 }} // aparece e sobe
              transition={{ duration: 0.8, delay: 0.2 }} // duração e atraso
            >
              Olá, sou a Izaelle Lavigne, frontend e UI Design
            </motion.h1>

            <motion.p
              className="text-zinc-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Utilizo JavaScript, React.js e Vue.js. Tenho experiência na
              criação de interfaces para Apps e sites, unindo desenvolvimento e
              design. Utilizo o Figma como principal ferramenta para elaborar
              protótipos e designs focados em usabilidade e experiência do
              usuário.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SocialMedia />
          </motion.div>
        </div>
        <Projects />
      </div>
      <AboutMe />
      <Footer />
    </div>
  );
}
