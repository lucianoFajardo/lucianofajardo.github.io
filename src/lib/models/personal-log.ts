import getRandomColor from "../server/random_colors";

interface PersonalLogModel {
  id: number;
  date: string;
  title: string;
  content: string;
  color: () => Promise<string>;
}

const randomId = () => Math.floor(Math.random() * 1000000);

export const logsPersonals: PersonalLogModel[] = [
  {
    id: randomId(),
    date: new Date().toISOString().split("T")[0],
    title: "Descubriendo nuevas experiencias",
    content: "Explorando nuevas oportunidades y aprendiendo cosas nuevas cada día.",
    color: () => getRandomColor(),
  },
  {
    id: randomId(),
    date: new Date().toISOString().split("T")[0],
    title: "Implementando nuevas funcionalidades",
    content: "Implementando nuevas funcionalidades y mejorando la experiencia del usuario.",
    color: () => getRandomColor(),
  },
   {
    id: randomId(),
    date: new Date().toISOString().split("T")[0],
    title: "Descubriendo nuevas experiencias",
    content: "Aprendiendo nuevas tecnologías y aplicándolas en proyectos personales.",
    color: () => getRandomColor(),
  },
];
