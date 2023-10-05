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
        image: "https://grandbaby-cakes.com/wp-content/uploads/2023/04/jollof-rice-recipe-23.jpg"
    },
    {
        id: 2,
        name: "Egusi Soup",
        price: "2,000",
        description: "A thick, hearty soup made from ground melon seeds, vegetables, and meat or fish. It's often served with fufu.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICPxWE33oyjEAaa4WeQefZ5vXVtEC_AOsrA&usqp=CAU"
    },
    {
        id: 3,
        name: "Suya",
        price: "800",
        description: "Skewered and grilled meat, typically beef or chicken, seasoned with a spicy peanut sauce",
        image: "https://nkechiajaeroh.com/wp-content/uploads/2020/06/Main-photo-4-Nigerian-Chicken-Suya.jpg"
    },
    {
        id: 4,
        name: "Pounded Yam and Egusi Soup",
        price: "3.50",
        description: "Pounded yam served with a thick soup made from melon seeds, leafy vegetables, and protein",
        image: "https://www.goodmealtime.com/wp-content/uploads/2023/02/Pounded-Yam.jpg"
    },
    {
        id: 5,
        name: "Akara",
        price: "2.50",
        description: "Deep-fried bean cakes made from black-eyed peas and spices, often served as a snack or breakfast.",
        image: "https://nkechiajaeroh.com/wp-content/uploads/2020/01/Akara-recipe-main-photo-2.jpg"
    },
    {
        id: 6,
        name: "Moi Moi",
        price: "1.20",
        description: "A steamed bean pudding made from grounded peeled beans, peppers, and spices.",
        image: "https://tribuneonlineng.com/wp-content/uploads/2020/01/MoiMoi.jpg"
    },
    {
        id: 7,
        name: "Amala and Ewedu Soup",
        price: "2.00",
        description: "A Yoruba dish consisting of smooth, brownish amala (yam flour) served with ewedu (jute leaf) soup.",
        image: "https://pbs.twimg.com/media/Ey9RpckWQAIzcXj.jpg"
    },
    {
        id: 8,
        name: "Dodo (Fried Plantains)",
        price: "1.50",
        description: "Sliced and fried ripe plantains, a popular side dish or snack.",
        image: "https://img-global.cpcdn.com/recipes/eb0e9da719bf6999/1200x630cq70/photo.jpg"
    },
    {
        id: 9,
        name: "Boli (Grilled Plantains)",
        price: "5.00",
        description: "Ripe plantains grilled over an open flame until they are soft and slightly caramelized.",
        image: "https://guardian.ng/wp-content/uploads/2018/08/IMG_8068-1-e1534524746186.jpg"
    },
    {
        id: 10,
        name: "Fried Rice",
        price: "6.50",
        description: "A colorful and flavorful rice dish cooked with vegetables, spices, and often with chicken or shrimp.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&usqp=CAU"
    },
    {
        id: 11,
        name: "Fufu and Egusi Soup",
        price: "4.00",
        description: "Fufu is a starchy side dish served with a thick, nutty Egusi soup.",
        image: "https://img-global.cpcdn.com/recipes/9cd060ad5ca13ba3/1200x630cq70/photo.jpg"
    },
    {
        id: 12,
        name: "Eba and Okra Soup",
        price: "2.50",
        description: "Eba is made from cassava and served with okra soup, a slimy vegetable-based soup.",
        image: "https://www.allnigerianrecipes.com/bimages/okrasoup-patienceadah.jpg"
    },
    {
        id: 13,
        name: "Pepper Soup",
        price: "3.75",
        description: "A spicy broth often made with assorted meats and fish, seasoned with hot peppers and aromatic spices.",
        image: "https://sisijemimah.com/wp-content/uploads/2016/11/Assorted-Meat-Pepper-Soup-1.jpg"
    },
    {
        id: 14,
        name: "Shawarma",
        price: "5.50",
        description: "A popular street food with Nigerian variations, typically consisting of seasoned meat (usually beef or chicken) wrapped in flatbread.",
        image: "https://cheflolaskitchen.com/wp-content/uploads/2018/07/Easy-Homemade-Chicken-Shawarma39.jpg"
    },
    {
        id: 15,
        name: "Ofada Rice and Ayamase Stew",
        price: "3.00",
        description: "Ofada rice is a local variety served with Ayamase stew, a spicy pepper sauce.",
        image: "https://guardian.ng/wp-content/uploads/2019/07/ofada-rice-stew-e1563548726678.jpg"
    },
    {
        id: 16,
        name: "Indomie Noodles",
        price: "4.25",
        description: "Instant noodles cooked with a variety of spices and ingredients for a quick and tasty meal",
        image: "https://indomartz.com/cdn/shop/products/IndomieMiGorengFriedNoodlesOriginalFlavor2.webp?v=1675962648&width=1946"
    },
    {
        id: 17,
        name: "Yam Porridge",
        price: "1.25",
        description: "Yam chunks cooked in a flavorful tomato and pepper sauce.",
        image: "https://www.thedreamafrica.com/wp-content/uploads/2018/01/Beef-Yam-Porridge.jpg"
    },
    {
        id: 18,
        name: "Chinchinga (Nigerian Kebabs)",
        price: "2.75",
        description: "Skewered and grilled meat, often marinated in a spicy sauce.",
        image: "https://foodienotachef.com/wp-content/uploads/2021/06/new-SuyaSpiceChicken-2.png"
    },
    {
        id: 19,
        name: "Efo Riro",
        price: "4.50",
        description: "A Yoruba vegetable soup made with assorted leafy greens, meat, and fish.",
        image: "https://lowcarbafrica.com/wp-content/uploads/2019/08/Efo-Riro-IG-2.jpg"
    },
    {
        id: 20,
        name: "Banga Soup (Ofe Akwu)",
        price: "1.75",
        description: "A palm nut soup often served with starchy sides like starch or pounded yam.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cSi0T2kvUuOiHVCLz2Reail1R0fiiLjStw&usqp=CAU"
    },
    {
        id: 21,
        name: "Oha Soup",
        price: "3.00",
        description: "A traditional Igbo soup made with oha leaves and flavored with spices and palm oil.",
        image: "https://i.ytimg.com/vi/egHS0xuyFws/maxresdefault.jpg"
    },
    {
        id: 22,
        name: "Ogbolo Soup",
        price: "4.00",
        description: "A delicious soup made from ogbolo seeds, vegetables, and spices.",
        image: "https://assets.unileversolutions.com/recipes-v2/159356.jpg"
    },
    {
        id: 23,
        name: "Kilishi",
        price: "5.50",
        description: "A Nigerian beef jerky, seasoned and dried to perfection, making it a popular snack.",
        image: "https://obalendefoods.com/cdn/shop/files/4F8230D4-C92C-4137-8F89-F26F48856F8F_1_201_a.jpg?v=1682913426&width=1445"
    },
    {
        id: 24,
        name: "Ukodo",
        price: "2.50",
        description: "A yam pepper soup made with goat meat and yam chunks.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHghu633m7tJEUQFr8t-FbmSN7qMdmjrbuQ&usqp=CAU"
    },
    {
        id: 25,
        name: "Tuwo Shinkafa",
        price: "1.75",
        description: "A northern Nigerian dish made from mashed rice and served with various soups.",
        image: "https://eatwellabi.com/wp-content/uploads/2022/10/Jamaican-chicken-soup-and-tuwo-16-720x480.jpg"
    },
    {
        id: 26,
        name: "Afang Soup",
        price: "2.00",
        description: "A vegetable soup made from the afang leaf, often cooked with a variety of proteins.",
        image: "https://agameals.com/wp-content/uploads/2022/11/maxresdefault-52-1140x694-1.jpg"
    },
    {
        id: 27,
        name: "Abacha and Ugba",
        price: "2.25",
        description: "A popular Igbo dish made from cassava and African oil bean seed.",
        image: "https://guardian.ng/wp-content/uploads/2018/08/Abacha.-Photo-Dailyfresheat-e1534627240972-1062x598.png"
    },
    {
        id: 28,
        name: "Semo and Egusi Soup",
        price: "2.50",
        description: "Semo is a swallow made from semolina and is often served with egusi soup.",
        image: "https://amalacentralfoods.com/wp-content/uploads/2023/01/Egusi-soup.jpg"
    },
    {
        id: 29,
        name: "Gbegiri Soup",
        price: "1.20",
        description: "A Yoruba bean soup typically served with amala.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7D_90XpEYWI_Km6usKuijuJ-A2onIknM4WA&usqp=CAU"
    },
    {
        id: 30,
        name: "Akpu and Black Soup",
        price: "3.00",
        description: "A traditional Igbo dish consisting of akpu (fermented cassava) and black soup.",
        image: "https://guardian.ng/wp-content/uploads/2020/03/Nigerian-Black-soup.-Img-by-1QFoodplatter.jpg_"
    },
    {
        id: 31,
        name: "Nkwobi",
        price: "1.50",
        description: "A spicy cow foot dish often served as a side dish or appetizer.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0Er0CefZt6Dh1rFtp7n28z1GqIFcOFlnBQ&usqp=CAU"
    },
    {
        id: 32,
        name: "Asun",
        price: "4.50",
        description: "Spicy grilled goat meat skewers, a popular Nigerian barbecue dish.",
        image: "https://guardian.ng/wp-content/uploads/2020/08/Peppered-Goat-Meat-Image-Youtube.jpg"
    },
    {
        id: 33,
        name: "Ekpang Nkukwo",
        price: "3.75",
        description: "A Cross River State specialty made with cocoyam and leafy vegetables.",
        image: "https://comechopnaija.com/wp-content/uploads/2017/12/epkang.jpg"
    },
    {
        id: 34,
        name: "Pounded Yam and Ogbono Soup",
        price: "5.00",
        description: "Pounded yam served with ogbono soup, a slimy Nigerian soup.",
        image: "https://aliyahsrecipesandtips.com/wp-content/uploads/2020/03/Ogbono-with-okra-soup-500x375.jpg"
    },
    {
        id: 35,
        name: "Ewa Agoyin",
        price: "1.00",
        description: " Mashed beans served with a spicy sauce made from palm oil and ground peppers.",
        image: "https://www.bellanaija.com/wp-content/uploads/2023/08/1AAA64B1-448F-4F16-82B9-91A8DD8A1184.jpeg"
    },
    {
        id: 36,
        name: "Fried Fish",
        price: "1.75",
        description: "Whole fish seasoned and deep-fried until crispy.",
        image: "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/1627342360931-9UPWBOPY8FL38EX45K2I/EOS+M50_4391.jpg"
    },
    {
        id: 37,
        name: "Starch and Banga Soup",
        price: "2.25",
        description: "Starchy side dish served with banga soup made from palm fruit.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVhDmNdckyUaa0JBHzWd2L0FguPoH2EDDCA&usqp=CAU"
    },
    {
        id: 38,
        name: "Ogi (Pap)",
        price: "2.50",
        description: "A Nigerian breakfast porridge made from maize, millet, or sorghum.",
        image: "https://www.diettechafrica.com/wp-content/uploads/2020/07/Akamu-cover-pic.jpg"
    },
    {
        id: 39,
        name: "Boiled Maize and Pear",
        price: "3.50",
        description: "Maize (corn) on the cob, boiled and often enjoyed with pear (avocado).",
        image: "https://i.ytimg.com/vi/BrbWbGwIh1I/maxresdefault.jpg"
    },
    {
        id: 40,
        name: "Garden Egg Sauce",
        price: "4.00",
        description: "A tasty sauce made from garden eggs (a type of eggplant) and palm oil.",
        image: "https://morningfresh.com.ng/wp-content/uploads/2019/11/Untitled-1-1080x675.jpg"
    },
    {
        id: 41,
        name: "Spaghetti",
        price: "1,500",
        description: "A unique Nigerian twist on the classic Italian pasta dish. It often includes a rich tomato-based sauce with spices and ingredients like vegetables, sausage, and sometimes a hint of local spices for a delightful fusion of flavors..",
        image: "https://i.ytimg.com/vi/xbVrrViGTJM/maxresdefault.jpg"
    },
    {
        id: 42,
        name: "Ewedu and Starch",
        price: "2,000",
        description: "A Yoruba dish with Ewedu soup, made from jute leaves, and served with starch.",
        image: "https://i.pinimg.com/736x/51/f6/10/51f61020e9e00fd823dee14c5fb79128.jpg"
    },
    {
        id: 43,
        name: "Ogbono and Semolina",
        price: "800",
        description: " Ogbono soup served with semolina swallow.",
        image: "https://i.pinimg.com/originals/c8/8b/82/c88b82250db1219a309b9fdfb8b5d26e.jpg"
    },
    {
        id: 44,
        name: "Fisherman Soup",
        price: "3.50",
        description: "A delicious soup made with various types of seafood, popular in the Niger Delta region.",
        image: "https://i.ytimg.com/vi/IivsmcVOC5o/maxresdefault.jpg"
    },
    {
        id: 45,
        name: "Bitter Leaf Soup",
        price: "2.50",
        description: "A traditional Nigerian soup made with bitter leaf and a variety of meats.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JEtDt8o_is-LYuvoyl2r0Q1A_FQB26Sz0BiSSDBc2-1eAmlVR6rw0zjZFhgp3QpS__4&usqp=CAU"
    },
    {
        id:46,
        name: "Edikang Ikong Soup",
        price: "1.20",
        description: "A thick and creamy soup made with groundnuts (peanuts) and served with fufu.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWuJ4X8M0OkvTQuK39B6ihADM63uiJiQa8H8Uqx0ZUO-E5Jrt8LNjjP5lVDZYBDEJwKQ&usqp=CAU"
    },
    {
        id: 47,
        name: "Groundnut Soup (Peanut Soup)",
        price: "2.00",
        description: "A thick and creamy soup made with groundnuts (peanuts) and served with fufu.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4xirbmVaYfLLhjt7D9FWJyv2S6GrSJswlvcgq9pJDSJd2fh16gZohqgCfTH_os9i7xU&usqp=CAU"
    },
    {
        id: 48,
        name: "Fufu",
        price: "1.50",
        description: "A staple Nigerian food made from starchy vegetables like cassava, yam, or plantains. It's boiled, pounded, and shaped into a dough-like consistency. Fufu is often served with a variety of delicious soups and sauces.",
        image: "https://recipefairy.com/wp-content/uploads/2021/06/how-to-make-fufu.jpg"
    },
    {
        id: 49,
        name: "Ugba Salad",
        price: "5.00",
        description: "A salad made from African oil bean seed (ugba) and vegetables.",
        image: "https://www.shutterstock.com/image-photo/close-shot-plate-african-salad-600w-1529467949.jpg"
    },
    {
        id: 50,
        name: "Ofe Nsala (White Soup)",
        price: "6.50",
        description: "A flavorful Igbo soup made with yam and a variety of proteins.",
        image: "https://i.ytimg.com/vi/tIjwSMTkRzI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1jlc-wCG8uieQTi75xboEKMPe7Q"
    },
    {
        id: 51,
        name: "Ewa Riro",
        price: "1,500",
        description: " A delicious Yoruba dish made from mashed beans and a spicy sauce.",
        image: "https://cheflolaskitchen.com/wp-content/uploads/2017/01/ewa-riro-1.jpg"
    },
    {
        id: 52,
        name: "Okpa",
        price: "2,000",
        description: " A steamed bean pudding made from Bambara groundnuts, popular in the eastern part of Nigeria.",
        image: "https://tribuneonlineng.com/wp-content/uploads/2022/10/F4A5B55A-CF95-4BB5-BA44-E038ADCC73BF.jpeg"
    },
    {
        id: 53,
        name: "Achara Soup",
        price: "800",
        description: "A sour soup made from cocoyam and flavored with achara (a type of vegetable).",
        image: "https://img-global.cpcdn.com/recipes/997f8d2bd854253b/1200x630cq70/photo.jpg"
    },
    {
        id: 54,
        name: "Kokoro",
        price: "3.50",
        description: "A Nigerian snack made from roasted maize and sugar.",
        image: "https://3.bp.blogspot.com/-kqp2EAX51qo/UVJ5vORZvkI/AAAAAAAAAio/pT3zV0enliE/s1600/kokoro+nigerian+snacks.jpg"
    },
    {
        id: 55,
        name: "Ogiri",
        price: "2.50",
        description: " A traditional Nigerian condiment made from fermented oil seeds.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6wALbctrv_WWOHWx3j8O43_Pb18clWUbGg&usqp=CAU"
    },
    {
        id:56,
        name: "Coconut Rice",
        price: "1.20",
        description: "A flavorful rice dish cooked with coconut milk and spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZYkt1pYTNiUULIH4nwpKgMp-P5YyWYSgyg&usqp=CAU"
    },
    {
        id: 57,
        name: "Nsala Soup",
        price: "2.00",
        description: " A white soup made with yam and a blend of spices, popular in Igbo cuisine.",
        image: "https://i.ytimg.com/vi/yOr7sx6Usfg/maxresdefault.jpg"
    },
    {
        id: 58,
        name: "Suya Spaghetti",
        price: "1.50",
        description: " Spaghetti noodles with a spicy suya sauce, a fusion of Italian and Nigerian flavors.",
        image: "https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/08/IMG_7298-2.jpg?ssl=1"
    },
    {
        id: 59,
        name: "Gurasa",
        price: "5.00",
        description: " A popular northern Nigerian bread, often served with sauce or grilled",
        image: "https://img-global.cpcdn.com/recipes/508f238f769dee1d/1200x630cq70/photo.jpg"
    },
    {
        id: 60,
        name: "Uji (Pap)",
        price: "6.50",
        description: "A porridge made from fermented corn or millet, a common breakfast dish in Nigeria.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OpTdL5UpLNIcCtkGGuJmyF9sLLtyRU17QA&usqp=CAU"
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