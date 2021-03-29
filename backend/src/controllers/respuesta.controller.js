const { Pool } = require("pg");
const configdb = require("./config") 
const pool = new Pool(configdb);


const getRespuesta = async(req, res) => {
    const response = await pool.query("	SELECT * FROM respuesta ORDER BY (fecha, idrespuesta)");
    res.status(200).json(response.rows);
};

const createRespuesta = async(req, res) => {
    const { idpublicacion, mensaje, fecha, idautor } = req.body;
    const response = await pool.query(
        "INSERT INTO respuesta ( idpublicacion, mensaje, fecha, idautor) VALUES ($1,$2,$3,$4)", [ idpublicacion, mensaje, "now()", idautor]
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
    getRespuesta,
    createRespuesta
};