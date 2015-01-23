var http = require('http');
var url = require('url');
var qs_parse = require('querystring').parse;
var mongojs = require('mongojs');
var uri = "tocadordemusica";
var db = mongojs.connect(uri,["usuario"]);
var server = http.createServer(requestHandler);
server.listen(2106);
function requestHandler(request,response){
	//response.writeHead(200,{"Content-Type":"text/html"});
	var resposta = qs_parse(url.parse(request.url).query);	
	//response.write(treatTheQuery(resposta)+"");
	console.log(treatTheQuery(resposta));
	//response.end();
	//TODO: Read the parameter from request. Define what parameters the server expect and split the actions for each parameter in functions.
}

function authenticateUser(nameUser){
	
	return false;
} 

function treatTheQuery(query){	
	
	//var queryObj = JSON.parse(query);
	if(query.usuario != undefined){
		console.log("get in query.usuario: "+ query.usuario);
		var records = db.usuario.find({ "usuario":"roselma"},
		function(err,records){
			if(err){
				return "Error";	
			}
			else if(!records){
				return "No records";
			}
			//TODO: Here treat the records and return the response.
			return "sucess";
		});
		//var myFirstDocument = records.hasNext() ? records.next() : null;
		return records;
	}	
}
