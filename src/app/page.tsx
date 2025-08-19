import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col max-w-[907px] items-center text-center gap-8">
        <h1 className="font-medium text-5xl text-zinc-950">Olá, sou a Izaelle Lavigne, frontend e UI Design</h1>
        <p className="text-zinc-600">
          Utilizo JavaScript, React.js e Vue.js. Tenho experiência na criação de
          interfaces para Apps e sites, unindo desenvolvimento e design. Utilizo
          o Figma como principal ferramenta para elaborar protótipos e designs
          focados em usabilidade e experiência do usuário.
        </p>
      </div>
    </div>
  );
}
