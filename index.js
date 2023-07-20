const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
let port = 4500;



let details = [
    "set",
    {   id:1,
        name:'femi',
        age:20,
        city:'ilorin'
    },
    {   id:2,
        name:'love',
        age:30,
        city:'lagos '
    },
    {   id:3,
        name:'femi',
        age:20,
        city:'ilorin'
    },
    {   id:4,
        name:'femi',
        age:20,
        city:'ilorin'
    },
]

app.get('/', (req,res)=>{
    res.send('hello')
})

app.get('/api', (req,res)=>{
    res.send(details)
})
app.post("/signup", (req,res)=>{
    console.log(req.body);
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})