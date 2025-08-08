const Topic = require("../../model/temas/temaModel")


const GetTopicsById = async (req, res) => {

    try {
        const topic = await Topic.getTopicById(req.params.id);
        if (!topic) return res.status(404).json({
            message: "tema no encontrado"
        })
        res.json(topic)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}
const ListTopics = async (req, res) => {
    try {
        const topics = await Topic.getAllTopics();
        res.json(topics);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { GetTopicsById, ListTopics };