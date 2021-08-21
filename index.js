const mid = 'https://tokyouwu.weebly.com/'

const http = require("http")

const axios = require("axios")


const server = http.createServer( (request, response) => {
   
   axios.get(mid + request.url, {responseType:"arraybuffer", timeout:20000}).then(resAPI => {
   
   const BufferedResponse = Buffer.from(resAPI.data, 'binary')

   response.writeHead(resAPI.status, {
     "Content-Type":resAPI.headers['content-type'],
     'Content-Length':BufferedResponse.length,
     "X-Advertising":"ye i used it why"
   })
   
  response.write(BufferedResponse)
  response.end()

   }).catch(error => {
     if (error.response) {
       
     response.writeHead(error.response.status, {"Content-Type":"application/json"})
     response.write(Buffer.from(error.response.data, 'binary'))
     
     return response.end()
     } else {
     response.writeHead(504, {"Content-Type":"application/json"})
     response.write(JSON.stringify({504:"Gateway Timed-out"}))
     
     return response.end()
     }
   })
   
})

const listener = server.listen(3000, () => console.log("Listening to Port " + listener.address().port))

""
