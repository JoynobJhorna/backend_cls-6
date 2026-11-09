// const fs = require('fs')



// const readstream = fs.createReadStream(`${__dirname}/node.txt`)

// // readstream.on('data',(buffer)=>{
// //     console.log(buffer.toString())
// // })


// const writestream = fs.createWriteStream(`${__dirname}/newfile.txt`)

// readstream.on('data',(buffer)=>{
//     writestream.write(buffer)
// })


const http = require('http')

// const server = http.createServer((req, res)=>{
//     res.write("i am backend")
//     res.end()
// })

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Home page")
    }
    else if(req.url === "/about"){
        res.end("About page")
    }
    else{
        res.end("Not found")
    }

})

server.listen(5000, ()=>{
    console.log("server is running")
})