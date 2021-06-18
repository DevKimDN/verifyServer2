const express = require('express');
const {createOneNumber,findOneNumber,updateOneNumber} = require('../controllers/myController');

const Router = express.Router();

Router.route('/').post(createOneNumber);
Router.route('/:id').get(findOneNumber);
Router.route('/:id').put(updateOneNumber);
module.exports = Router;