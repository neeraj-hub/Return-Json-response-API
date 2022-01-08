const file=require('fs');
const http=require('http');



// file.readFile('./result.json','utf-8',(err,jsonString)=>{
//     if(err){
//         console.log('error occured',err);
//     }
//     else{
//         try{
//             const data=JSON.parse(jsonString);
//             console.log(data.result);

//         }
//         catch(err){
//             console.log('error parsing json file',err);
//         }
//     }
// })

http.createServer(function (req, res) {
    switch(req.url){
        case "/veggies":
                file.readFile('./result.json',"utf-8",(err,data)=>{
                if(err) throw err;
                res.writeHead(200,{'Content-Type': 'text/veggies'});
                //data=JSON.parse(jsonString);
                res.end(data)
            })
            break;
    }
}).listen(5000,()=>console.log('listening on port 5000'));