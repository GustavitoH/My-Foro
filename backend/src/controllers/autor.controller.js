const { Pool } = require("pg");
const configdb = require("./config") 
const pool = new Pool(configdb);

const getAutor = async(req, res) => {
    const response = await pool.query("SELECT * FROM autor");
    res.status(200).json(response.rows);
};

const createAutor = async(req, res) => {
    const { nombre, apellido, usuario, passw } = req.body;
    const response = await pool.query(
        "INSERT INTO autor (nombre, apellido, usuario, passw) VALUES ($1,$2,$3,$4)", [nombre, apellido, usuario, passw]
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
    getAutor,
    createAutor
};
