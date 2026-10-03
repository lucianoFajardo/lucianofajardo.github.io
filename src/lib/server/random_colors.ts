const randomColors = [
  "#FF5734",
  "#33FF57",
  "#3357FF",
  "#F333FF",
  "#33FFF5",
  "#FF33A1",
  "#A1FF33",
  "#FF8C33",
  "#8C33FF",
  "#33FF8C",
  "#FF3333",
  "#33A1FF",
  "#A133FF",
];

export default function getRandomColor(): Promise<string> {
  return Promise.resolve(randomColors[Math.floor(Math.random() * randomColors.length)]);
}
