/**
 * Dummy Virtualization Server Implementation
 */
var express = require('express');
var bodyParser = require('body-parser')
var virtCollection = require('./src/virts')
var virtualizations = new virtCollection();
const PORT = process.env.PORT || 8090;
var app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/**
 * HTTP GET /virtualizations
 * Returns: the list of tasks in JSON format
 */
app.get('/sv/v1/virtualizations', function (request, response) {
    response.json({virtualizationList: virtualizations.getVirts()});
});

/**
 * HTTP PUT /virtualizations/:virtualizationID
 * Param: :virtualizationID is the unique identifier of the virt you want to update
 * Returns: the updated virt in a JSON format
 * Error: 404 HTTP code if it can't find the virt
 */
app.put('/sv/v1/virtualizations/:virtualizationID', function (request, response) {
    try {       
        virtualizations.update(request.params.virtualizationID, request.body);
        response.sendStatus(200);
    } catch (exeception) {
        response.sendStatus(404);
    }

});

app.listen(PORT, function () {
    console.log('Dummy server listening on port ' + PORT + '!');
});