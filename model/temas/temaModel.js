const db = require("../../bd")

const getTopicById = async (id) => {
    const result = await db.query("select * from temas where id_tema = $1", [id])
    return result.rows[0];
}
const getAllTopics = async () => {
    const result = await db.query("Select * from temas");
    return result.rows;
}

module.exports = { getTopicById, getAllTopics }