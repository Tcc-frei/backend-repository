import {
  consultarVisitaId,
  consultarVisitas,
  deletarVisita,
} from "../repository/visitaRepository.js";

export async function consultarVisitasService() {
  const visitas = await consultarVisitas();

  return visitas;
}

export async function deletarVisitaService(id) {
  const visita = await consultarVisitaId(id);

  if (!visita) throw new Error(`Visita com o id ${id} não foi encontrado.`);

  await deletarVisita(id);
}
