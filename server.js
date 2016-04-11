/**
 * FreeCodeCamp File Metadata Microservice Challenge
 * Receive a file and returns some of it's metadatas
 * @author Lior Chamla
 */
require('dotenv').config();
var http = require('http');
var path = require('path');
var express = require('express');
var router = express();
var server = http.createServer(router);
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

// static files (html, css ...)
router.use(express.static(path.resolve(__dirname, 'client')));

// route on GET with a parameter 
router.post('/analyze/', upload.single('file'), function (req, res, next) {
  // setting json headers
  res.set({ 'Content-Type': 'application/json' });
  
  // going on the logic :
  var file = req.file;
  if(file == undefined) res.json({error: "No file submitted"});
  else res.json({size: file.size, mimetype: file.mimetype, name: file.originalname});
});

// listening to port and processing
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("File Metadata microservice listening at", addr.address + ":" + addr.port);
});
