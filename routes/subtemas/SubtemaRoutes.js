const express = require('express');
const router = express.Router();
const SubtemaController = require("../../controller/subtemas/SubtemaController")

router.get('/', SubtemaController.getSubtemasByIdTopic);

router.get('/:id', SubtemaController.getSubtemaId);
module.exports = router