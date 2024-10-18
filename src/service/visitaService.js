import { consultarVisitas } from "../repository/visitaRepository.js";

export async function consultarVisitasService() {
  const visitas = await consultarVisitas();

  return visitas;
}
