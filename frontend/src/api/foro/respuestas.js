import axios from "axios";
import API_URL from "@/api";

const listaRespuestas = () => axios.get(`${API_URL}/respuestas`);
const crearRespuesta = (nuevaRespuesta) =>
  axios.post(`${API_URL}/respuestas`, nuevaRespuesta);

export default {
  listaRespuestas,
  crearRespuesta,
};
