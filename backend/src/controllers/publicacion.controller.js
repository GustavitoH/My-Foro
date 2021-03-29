const { Pool } = require("pg");
const configdb = require("./config") 
const pool = new Pool(configdb);


const getPublicacion = async(req, res) => {
    const response = await pool.query("SELECT * FROM publicacion");
    res.status(200).json(response.rows);
};

const createPublicacion = async(req, res) => {
    const { idautor, titulo, mensaje, fecha } = req.body;
    const response = await pool.query(
        "INSERT INTO publicacion (idautor, titulo, mensaje, fecha) VALUES ($1,$2,$3,$4)", [idautor, titulo, mensaje, "now()"]
    );
    if (response) {
        res.json({
            message: "Guardado con éxito",
        });
    }

    if (!response) {
        res.json({
            message: "Guardado no realizado",
        });
    }
};

module.exports = {
    getPublicacion,
    createPublicacion
};