import { consultarVisitas } from "../repository/visitaRepository";

export async function consultarVisitasService() {
  const visitas = await consultarVisitas();

  return visitas;
}
