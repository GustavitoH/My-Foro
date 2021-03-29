import axios from "axios";
import API_URL from "@/api";

const listaPublicaciones = () => axios.get(`${API_URL}/publicaciones`);
const crearPublicacion = (nuevaPublicacion) =>
  axios.post(`${API_URL}/publicaciones`, nuevaPublicacion);

export default {
  listaPublicaciones,
  crearPublicacion,
};
