const express = require('express');
const router = express.Router();
const TopicController = require("../../controller/temas/TemaController");

router.get("/", TopicController.ListTopics)
router.get("/:id", TopicController.GetTopicsById)


module.exports = router