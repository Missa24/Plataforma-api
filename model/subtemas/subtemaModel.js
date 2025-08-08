const db = require("../../bd")

async function GetAllSubTemas() {
    const result = await db.query("select * from subtemas");
    return result.rows;
}

async function ObtenerSubtemasByIdTopic(id_tema) {
    const result = await db.query(
        'SELECT * FROM subtemas WHERE id_tema = $1',
        [id_tema]
    );
    return result.rows;
}

async function SubtemaPorId(id_subtema) {
    const result = await db.query(
        'Select * from subtemas where id_subtema = $1', [id_subtema]
    );
    return result.rows;
}

module.exports = { ObtenerSubtemasByIdTopic, SubtemaPorId }
