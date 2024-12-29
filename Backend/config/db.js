const mongoose = require('mongoose')
require("dotenv").config();

const connection = mongoose.connect('mongodb+srv://Elle23:Rosa2359@cluster0.kznw6.mongodb.net/?retryWrites=true&w=majority');
  

module.exports={connection}