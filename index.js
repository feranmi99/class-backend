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
        name: "Jollof Rice",
        price: "1,500",
        description: "A popular one-pot dish made with rice, tomatoes, peppers, and various spices. It's known for its rich, flavorful taste.",
        image: "https://tourandculture.com/wp-content/uploads/2023/01/Popular-Traditional-Nigerian-Food-min.jpg"
    },
    {
        id: 2,
        name: "Egusi Soup",
        price: "2,000",
        description: "A thick, hearty soup made from ground melon seeds, vegetables, and meat or fish. It's often served with fufu.",
        image: "https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-afang-soup.jpg"
    },
    {
        id: 3,
        name: "Suya",
        price: "800",
        description: "Skewered and grilled meat, typically beef or chicken, seasoned with a spicy peanut sauce",
        image: "https://blog.remitly.com/wp-content/uploads/2022/09/different-Nigerian-dishes.jpeg"
    },
    {
        id: 4,
        name: "Pounded Yam and Egusi Soup",
        price: "3.50",
        description: "Pounded yam served with a thick soup made from melon seeds, leafy vegetables, and protein",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr08/original-grid-image-6752-1427453005-8.jpg?crop=894:667;107,0"
    },
    {
        id: 5,
        name: "Akara",
        price: "2.50",
        description: "Deep-fried bean cakes made from black-eyed peas and spices, often served as a snack or breakfast.",
        image: "https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-afang-soup.jpg"
    },
    {
        id: 6,
        name: "Moi Moi",
        price: "1.20",
        description: "A steamed bean pudding made from grounded peeled beans, peppers, and spices.",
        image: "https://i0.wp.com/thetrumpet.ng/wp-content/uploads/2022/08/yam-porridge.jpg"
    },
    {
        id: 7,
        name: "Amala and Ewedu Soup",
        price: "2.00",
        description: "A Yoruba dish consisting of smooth, brownish amala (yam flour) served with ewedu (jute leaf) soup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fAZmxff4zxCNR4nuUUB4z6-a8u98XvHtSgORl5E-4UaRzSg0p0lwr_eTiOZJ5CHDdJ8&usqp=CAU"
    },
    {
        id: 8,
        name: "Dodo (Fried Plantains)",
        price: "1.50",
        description: "Sliced and fried ripe plantains, a popular side dish or snack.",
        image: "https://example.com/eggs.jpg"
    },
    {
        id: 9,
        name: "Boli (Grilled Plantains)",
        price: "5.00",
        description: "Ripe plantains grilled over an open flame until they are soft and slightly caramelized.",
        image: "https://example.com/chicken.jpg"
    },
    {
        id: 10,
        name: "Fried Rice",
        price: "6.50",
        description: "A colorful and flavorful rice dish cooked with vegetables, spices, and often with chicken or shrimp.",
        image: "https://example.com/fish.jpg"
    },
    {
        id: 11,
        name: "Fufu and Egusi Soup",
        price: "4.00",
        description: "Fufu is a starchy side dish served with a thick, nutty Egusi soup.",
        image: "https://example.com/cereal.jpg"
    },
    {
        id: 12,
        name: "Eba and Okra Soup",
        price: "2.50",
        description: "Eba is made from cassava and served with okra soup, a slimy vegetable-based soup.",
        image: "https://example.com/bread.jpg"
    },
    {
        id: 13,
        name: "Pepper Soup",
        price: "3.75",
        description: "A spicy broth often made with assorted meats and fish, seasoned with hot peppers and aromatic spices.",
        image: "https://example.com/cheese.jpg"
    },
    {
        id: 14,
        name: "Shawarma",
        price: "5.50",
        description: "A popular street food with Nigerian variations, typically consisting of seasoned meat (usually beef or chicken) wrapped in flatbread.",
        image: "https://example.com/coffee.jpg"
    },
    {
        id: 15,
        name: "Ofada Rice and Ayamase Stew",
        price: "3.00",
        description: "Ofada rice is a local variety served with Ayamase stew, a spicy pepper sauce.",
        image: "https://example.com/tea.jpg"
    },
    {
        id: 16,
        name: "Indomie Noodles",
        price: "4.25",
        description: "Instant noodles cooked with a variety of spices and ingredients for a quick and tasty meal",
        image: "https://example.com/chocolate.jpg"
    },
    {
        id: 17,
        name: "Yam Porridge",
        price: "1.25",
        description: "Yam chunks cooked in a flavorful tomato and pepper sauce.",
        image: "https://example.com/soda.jpg"
    },
    {
        id: 18,
        name: "Chinchinga (Nigerian Kebabs)",
        price: "2.75",
        description: "Skewered and grilled meat, often marinated in a spicy sauce.",
        image: "https://example.com/chips.jpg"
    },
    {
        id: 19,
        name: "Efo Riro",
        price: "4.50",
        description: "A Yoruba vegetable soup made with assorted leafy greens, meat, and fish.",
        image: "https://example.com/ice-cream.jpg"
    },
    {
        id: 20,
        name: "Banga Soup (Ofe Akwu)",
        price: "1.75",
        description: "A palm nut soup often served with starchy sides like starch or pounded yam.",
        image: "https://example.com/yogurt.jpg"
    },
    {
        id: 21,
        name: "Oha Soup",
        price: "3.00",
        description: "A traditional Igbo soup made with oha leaves and flavored with spices and palm oil.",
        image: "https://example.com/oranges.jpg"
    },
    {
        id: 22,
        name: "Ogbolo Soup",
        price: "4.00",
        description: "A delicious soup made from ogbolo seeds, vegetables, and spices.",
        image: "https://example.com/grapes.jpg"
    },
    {
        id: 23,
        name: "Kilishi",
        price: "5.50",
        description: "A Nigerian beef jerky, seasoned and dried to perfection, making it a popular snack.",
        image: "https://example.com/strawberries.jpg"
    },
    {
        id: 24,
        name: "Ukodo",
        price: "2.50",
        description: "A yam pepper soup made with goat meat and yam chunks.",
        image: "https://example.com/avocado.jpg"
    },
    {
        id: 25,
        name: "Tuwo Shinkafa",
        price: "1.75",
        description: "A northern Nigerian dish made from mashed rice and served with various soups.",
        image: "https://example.com/carrots.jpg"
    },
    {
        id: 26,
        name: "Afang Soup",
        price: "2.00",
        description: "A vegetable soup made from the afang leaf, often cooked with a variety of proteins.",
        image: "https://example.com/spinach.jpg"
    },
    {
        id: 27,
        name: "Abacha and Ugba",
        price: "2.25",
        description: "A popular Igbo dish made from cassava and African oil bean seed.",
        image: "https://example.com/broccoli.jpg"
    },
    {
        id: 28,
        name: "Semo and Egusi Soup",
        price: "2.50",
        description: "Semo is a swallow made from semolina and is often served with egusi soup.",
        image: "https://example.com/potatoes.jpg"
    },
    {
        id: 29,
        name: "Gbegiri Soup",
        price: "1.20",
        description: "A Yoruba bean soup typically served with amala.",
        image: "https://example.com/onions.jpg"
    },
    {
        id: 30,
        name: "Akpu and Black Soup",
        price: "3.00",
        description: "A traditional Igbo dish consisting of akpu (fermented cassava) and black soup.",
        image: "https://xWQmicCHVorCwQQMygGegQIARB_"
    },
    {
        id: 31,
        name: "Nkwobi",
        price: "1.50",
        description: "A spicy cow foot dish often served as a side dish or appetizer.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 32,
        name: "Asun",
        price: "4.50",
        description: "Spicy grilled goat meat skewers, a popular Nigerian barbecue dish.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 33,
        name: "Ekpang Nkukwo",
        price: "3.75",
        description: "A Cross River State specialty made with cocoyam and leafy vegetables.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 34,
        name: "Pounded Yam and Ogbono Soup",
        price: "5.00",
        description: "Pounded yam served with ogbono soup, a slimy Nigerian soup.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 35,
        name: "Ewa Agoyin",
        price: "1.00",
        description: " Mashed beans served with a spicy sauce made from palm oil and ground peppers.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 36,
        name: "Fried Fish",
        price: "1.75",
        description: "Whole fish seasoned and deep-fried until crispy.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 37,
        name: "Starch and Banga Soup",
        price: "2.25",
        description: "Starchy side dish served with banga soup made from palm fruit.",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.willflyforfood.net%2Fwp-content%2FuploacCHVorCwQQMygGegQIARB_"
    },
    {
        id: 38,
        name: "Ogi (Pap)",
        price: "2.50",
        description: "A Nigerian breakfast porridge made from maize, millet, or sorghum.",
        image: "https://example.com/grapefruit.jpg"
    },
    {
        id: 39,
        name: "Boiled Maize and Pear",
        price: "3.50",
        description: "Maize (corn) on the cob, boiled and often enjoyed with pear (avocado).",
        image: "https://example.com/blueberries.jpg"
    },
    {
        id: 40,
        name: "Garden Egg Sauce",
        price: "4.00",
        description: "A tasty sauce made from garden eggs (a type of eggplant) and palm oil.",
        image: "https://example.com/raspberries.jpg"
    },
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