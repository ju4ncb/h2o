import { OpcionTipo } from "./Opcion.js";

export type PreguntaTipo = {
  descripcion: string;
  opciones: OpcionTipo[];
  codigo: string;
};
