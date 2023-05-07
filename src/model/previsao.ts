export interface previsao extends HTMLElement {
  date: string;
  maxTemp: number;
  minTemp: number;
  maxWindSpeed: number;
  precipAccum: number;
  symbol: string;
  winDir: number;
}
