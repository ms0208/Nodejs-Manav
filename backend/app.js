const express = require('express')
const {mongooseConnection}= require('./Connection/mongooseConnection')
mongooseConnection()
const app = express()
