const SubTema = require("../../model/subtemas/subtemaModel")

async function getSubtemasByIdTopic(req, res) {
    const { id_tema } = req.query;
    if (!id_tema) {
        return res.status(400).json({ error: "Falta el parámetro id_tema" });
    }
    try {
        const subtemas = await SubTema.ObtenerSubtemasByIdTopic(id_tema);
        res.json(subtemas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los subtemas" });
    }
}


async function getSubtemaId(req, res) {
    const { id_subtema } = req.query;
    if (!id_subtema) {
        return res.status(400).json({ error: "Falta el parametro id_subtema" });
    }
    try {
        const subtema = await SubTema.SubtemaPorId(id_subtema);
        res.json(subtema);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el subtema" })
    }
}

module.exports = { getSubtemasByIdTopic, getSubtemaId };