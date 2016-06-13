var express = require("express")
var app = express();

app.use(express.static("public"))

app.get("/connect",function(req,res){
	res.render("/connect")
})

app.listen(3000)
console.log("服务器已成功连接")