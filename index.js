const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
let port = 4500;



let details = [
    {
        id: 1,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 2,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 3,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 4,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 5,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 6,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 7,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 8,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 9,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 10,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },


    {
        id: 11,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 12,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 13,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 14,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 15,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
    {
        id: 16,
        name: "rice",
        price: "1,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjY9InE2215svW9oxT7WLqYan6fLX1MPQ2A&usqp=CAU"
    },
]

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/api', (req, res) => {
    res.send(details)
})
app.post("/signup", (req, res) => {
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})