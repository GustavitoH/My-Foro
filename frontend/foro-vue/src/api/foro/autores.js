import axios from "axios";
import API_URL from "@/api";

const listaAutores = () => axios.get(`${API_URL}/autores`);
const crearAutor = (nuevoAutor) => axios.post(`${API_URL}/autores`, nuevoAutor);

export default {
  listaAutores,
  crearAutor,
};
