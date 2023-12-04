const url=require('url')
const express=require('express')
const app=express()
content="http://localhost:8000/50"
const parsed=url.parse(content)
console.log(parsed.path.replace(/\//,""))
app.get('/',(req,res)=>{
    res.end("hello")
})
app.get('/:number', (req, res) => {
    // Extract the number parameter from the path
    const number = parseInt(req.params.number, 10);
    res.json(`Hello`)
    //res.json({ message: `Received number: ${number}` });

    
  });
app.listen(8000)