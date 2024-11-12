import { OpcionTipo } from "./Opcion.js";

export type PreguntaTipo = {
  codigo: string;
  descripcion: string;
  dificultad: number;
};

export type PreguntaTipoExtendido = PreguntaTipo & {
  id_ju: number;
  id_pr: number;
};

export type PreguntaTipoExtendidoOpciones = PreguntaTipoExtendido & {
  opciones: OpcionTipo[];
};

export const dificultades = [
  "Muy fácil",
  "Fácil",
  "Medio",
  "Difícil",
  "Muy difícil",
];
