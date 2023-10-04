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
        name: "Rice",
        price: "1,500",
        description: "High-quality long-grain rice.",
        image: "https://tourandculture.com/wp-content/uploads/2023/01/Popular-Traditional-Nigerian-Food-min.jpg"
    },
    {
        id: 2,
        name: "Wheat",
        price: "2,000",
        description: "Organic whole wheat grains.",
        image: "https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-afang-soup.jpg"
    },
    {
        id: 3,
        name: "Pasta",
        price: "800",
        description: "Assorted pasta shapes for all occasions.",
        image: "https://blog.remitly.com/wp-content/uploads/2022/09/different-Nigerian-dishes.jpeg"
    },
    {
        id: 4,
        name: "Apples",
        price: "3.50",
        description: "Fresh and crisp apples from local orchards.",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr08/original-grid-image-6752-1427453005-8.jpg?crop=894:667;107,0"
    },
    {
        id: 5,
        name: "Bananas",
        price: "2.50",
        description: "Sweet and ripe bananas.",
        image: "https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-afang-soup.jpg"
    },
    {
        id: 6,
        name: "Tomatoes",
        price: "1.20",
        description: "Juicy and red vine-ripened tomatoes.",
        image: "https://i0.wp.com/thetrumpet.ng/wp-content/uploads/2022/08/yam-porridge.jpg"
    },
    {
        id: 7,
        name: "Milk",
        price: "2.00",
        description: "Fresh dairy milk from local farms.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fAZmxff4zxCNR4nuUUB4z6-a8u98XvHtSgORl5E-4UaRzSg0p0lwr_eTiOZJ5CHDdJ8&usqp=CAU"
    },
    // {
    //     id: 8,
    //     name: "Eggs",
    //     price: "1.50",
    //     description: "Farm-fresh brown eggs.",
    //     image: "https://example.com/eggs.jpg"
    // },
    // {
    //     id: 9,
    //     name: "Chicken",
    //     price: "5.00",
    //     description: "Premium quality chicken breast fillets.",
    //     image: "https://example.com/chicken.jpg"
    // },
    // {
    //     id: 10,
    //     name: "Fish",
    //     price: "6.50",
    //     description: "Fresh-caught fish from local waters.",
    //     image: "https://example.com/fish.jpg"
    // },
    // {
    //     id: 11,
    //     name: "Cereal",
    //     price: "4.00",
    //     description: "Nutritious breakfast cereal with whole grains.",
    //     image: "https://example.com/cereal.jpg"
    // },
    // {
    //     id: 12,
    //     name: "Bread",
    //     price: "2.50",
    //     description: "Homemade artisanal bread.",
    //     image: "https://example.com/bread.jpg"
    // },
    // {
    //     id: 13,
    //     name: "Cheese",
    //     price: "3.75",
    //     description: "Assorted cheese varieties from around the world.",
    //     image: "https://example.com/cheese.jpg"
    // },
    // {
    //     id: 14,
    //     name: "Coffee",
    //     price: "5.50",
    //     description: "Premium roasted coffee beans.",
    //     image: "https://example.com/coffee.jpg"
    // },
    // {
    //     id: 15,
    //     name: "Tea",
    //     price: "3.00",
    //     description: "Fine quality tea leaves for a soothing cup of tea.",
    //     image: "https://example.com/tea.jpg"
    // },
    // {
    //     id: 16,
    //     name: "Chocolate",
    //     price: "4.25",
    //     description: "Delicious assorted chocolate bars.",
    //     image: "https://example.com/chocolate.jpg"
    // },
    // {
    //     id: 17,
    //     name: "Soda",
    //     price: "1.25",
    //     description: "Refreshing carbonated beverages in various flavors.",
    //     image: "https://example.com/soda.jpg"
    // },
    // {
    //     id: 18,
    //     name: "Chips",
    //     price: "2.75",
    //     description: "Crunchy potato chips for snacking.",
    //     image: "https://example.com/chips.jpg"
    // },
    // {
    //     id: 19,
    //     name: "Ice Cream",
    //     price: "4.50",
    //     description: "Creamy and indulgent ice cream flavors.",
    //     image: "https://example.com/ice-cream.jpg"
    // },
    // {
    //     id: 20,
    //     name: "Yogurt",
    //     price: "1.75",
    //     description: "Creamy yogurt with various fruit flavors.",
    //     image: "https://example.com/yogurt.jpg"
    // },
    // {
    //     id: 21,
    //     name: "Oranges",
    //     price: "3.00",
    //     description: "Juicy and vitamin-rich oranges.",
    //     image: "https://example.com/oranges.jpg"
    // },
    // {
    //     id: 22,
    //     name: "Grapes",
    //     price: "4.00",
    //     description: "Sweet and seedless grapes.",
    //     image: "https://example.com/grapes.jpg"
    // },
    // {
    //     id: 23,
    //     name: "Strawberries",
    //     price: "5.50",
    //     description: "Fresh and succulent strawberries.",
    //     image: "https://example.com/strawberries.jpg"
    // },
    // {
    //     id: 24,
    //     name: "Avocado",
    //     price: "2.50",
    //     description: "Creamy and nutritious avocados.",
    //     image: "https://example.com/avocado.jpg"
    // },
    // {
    //     id: 25,
    //     name: "Carrots",
    //     price: "1.75",
    //     description: "Crunchy and vitamin-packed carrots.",
    //     image: "https://example.com/carrots.jpg"
    // },
    // {
    //     id: 26,
    //     name: "Spinach",
    //     price: "2.00",
    //     description: "Fresh and leafy spinach.",
    //     image: "https://example.com/spinach.jpg"
    // },
    // {
    //     id: 27,
    //     name: "Broccoli",
    //     price: "2.25",
    //     description: "Nutrient-rich broccoli florets.",
    //     image: "https://example.com/broccoli.jpg"
    // },
    // {
    //     id: 28,
    //     name: "Potatoes",
    //     price: "2.50",
    //     description: "Versatile and starchy potatoes.",
    //     image: "https://example.com/potatoes.jpg"
    // },
    // {
    //     id: 29,
    //     name: "Onions",
    //     price: "1.20",
    //     description: "Pungent and flavorful onions.",
    //     image: "https://example.com/onions.jpg"
    // },
    // {
    //     id: 30,
    //     name: "Bell Peppers",
    //     price: "3.00",
    //     description: "Colorful and crunchy bell peppers.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 31,
    //     name: "Cucumbers",
    //     price: "1.50",
    //     description: "Cool and refreshing cucumbers.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 32,
    //     name: "Mangoes",
    //     price: "4.50",
    //     description: "Sweet and tropical mangoes.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 33,
    //     name: "Pineapples",
    //     price: "3.75",
    //     description: "Juicy and tangy pineapples.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 34,
    //     name: "Watermelon",
    //     price: "5.00",
    //     description: "Refreshing and hydrating watermelons.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 35,
    //     name: "Lemons",
    //     price: "1.00",
    //     description: "Sour and citrusy lemons.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 36,
    //     name: "Lettuce",
    //     price: "1.75",
    //     description: "Crisp and fresh lettuce leaves.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 37,
    //     name: "Pears",
    //     price: "2.25",
    //     description: "Sweet and juicy pears.",
    //     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fnigerian-food-afang-soup.jpg&tbnid=1HnliPsgfei2OM&vet=12ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.willflyforfood.net%2Ffood-in-nigeria%2F&docid=jb62YAkPDuE9MM&w=1200&h=800&q=nigeriafoods&ved=2ahUKEwj93-_YnNyBAxWQmicCHVorCwQQMygGegQIARB_"
    // },
    // {
    //     id: 38,
    //     name: "Grapefruit",
    //     price: "2.50",
    //     description: "Tangy and vitamin-packed grapefruit.",
    //     image: "https://example.com/grapefruit.jpg"
    // },
    // {
    //     id: 39,
    //     name: "Blueberries",
    //     price: "3.50",
    //     description: "Nutrient-rich and antioxidant-packed blueberries.",
    //     image: "https://example.com/blueberries.jpg"
    // },
    // {
    //     id: 40,
    //     name: "Raspberries",
    //     price: "4.00",
    //     description: "Sweet and tart raspberries.",
    //     image: "https://example.com/raspberries.jpg"
    // },
];

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