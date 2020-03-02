var pagina_curenta;
var watches_men = [{
    id: 1,
    img: "./photos/men/fossil1.jpg",
    brand: "Fossil",
    name: "Grant Cream Dial Men's Chronograph Watch",
    price: 660,
    moneda: "$"
},
{
    id: 2,
    img: "./photos/men/fossil2.jpg",
    brand: "Fossil",
    name: "Grant Chronograph Black and Blue Dial Men's Watch",
    price: 345,
    moneda: "$"
},
{
    id: 3,
    img: "./photos/men/fossil3.jpg",
    name: "Townsman Automatic Blue Satin Dial Men's Watch",
    brand: "Fossil",
    price: 765,
    moneda: "$"
},
{
    id: 4,
    img: "./photos/men/PG8295X1.jpg",
    brand: "Pulsar",
    name: "Men’s Pulsar Watch PS9605X1",
    price: 760,
    moneda: "$"
},
{
    id: 5,
    img: "./photos/men/PS9605X1.jpg",
    brand: "Pulsar",
    name: "Men’s Pulsar Watch PG8295X1",
    price: 134,
    moneda: "$"
},
{
    id: 6,
    img: "./photos/men/PT3938X1.jpg",
    brand: "Pulsar",
    name: "Men’s Pulsar Watch PT3938X1",
    price: 769,
    moneda: "$"
},
{
    id: 7,
    img: "./photos/men/PZ5062X1.jpg",
    brand: "Pulsar",
    name: "Men’s Pulsar Solar Powered Watch PZ5062X1",
    price: 990,
    moneda: "$"
},
{
    id: 8,
    img: "./photos/men/rolex1.jpg",
    brand: "Rolex",
    name: "Cosmograph Daytona Automatic Diamond Men's Watch",
    price: 245,
    moneda: "$"
},
{
    id: 9,
    img: "./photos/men/rolex2.jpg",
    brand: "Rolex",
    name: "Yacht-Master Automatic Black Dial 18kt Everose Gold Black Rubber Strap Men's Watch BKSRS",
    price: 654,
    moneda: "$"
},
{
    id: 10,
    img: "./photos/men/rolex3.jpg",
    brand: "Rolex",
    name: "Day-Date Automatic Chronometer Champagne Dial Men's Watch",
    price: 660,
    moneda: "$"
},
{
    id: 11,
    img: "./photos/men/rolex4.jpg",
    brand: "Rolex",
    name: "Oyster Perpetual Datejust 41 Blue Dial Automatic Men's Watch",
    price: 605,
    moneda: "$"
},
{
    id: 12,
    img: "./photos/men/rolex5.jpg",
    brand: "Rolex",
    name: "Datejust 41 Black Dial Steel and 18K Yellow Gold Jubilee Men's Watch",
    price: 612,
    moneda: "$"
},
{
    id: 13,
    img: "./photos/men/sekonda1.jpg",
    brand: "Sekonda",
    name: "Midnight Blue Men’s Black Strap Dress Watch",
    price: 66,
    moneda: "$"
},
{
    id: 14,
    img: "./photos/men/sekonda2.jpg",
    brand: "Sekonda",
    name: "Men’s Stainless Steel Bracelet Watch",
    price: 466,
    moneda: "$"
},
{
    id: 15,
    img: "./photos/men/SSH023J1_seiko.jpg",
    brand: "Seiko",
    name: "Pasage",
    price: 556,
    moneda: "$"
},
{
    id: 16,
    img: "./photos/men/SSH047J1_seiko.jpg",
    brand: "Seiko",
    name: "Astron",
    price: 656,
    moneda: "$"
}
]
var button_men_watches = document.querySelector("#men_watches");
button_men_watches.addEventListener("click", display_watches_men);
function display_watches_men(e) {
    e.preventDefault();
    pagina_curenta = "men";
    myWhatches(watches_men);
}


var watches_women = [{
    id: 1,
    img: "./photos/women/fossil1.jpeg",
    brand: "Fossil",
    name: "Women's Neely Watch",
    price: 660,
    moneda: "$"
},
{
    id: 2,
    img: "./photos/women/fossil2.jpg",
    brand: "Fossil",
    name: "Boyfriend Chronograph Silver Dial Ladies Watch",
    price: 600,
    moneda: "$"
},
{
    id: 3,
    img: "./photos/women/PH8364X1.jpg",
    brand: "Pulsar",
    name: "Ladies Pulsar Solar Powered Watch PY5042X1",
    price: 166,
    moneda: "$"
},
{
    id: 4,
    img: "./photos/women/PN4054X1.jpg",
    brand: "Pulsar",
    name: "Ladies Pulsar Dress Mesh Watch PN4054X1",
    price: 887,
    moneda: "$"
},
{
    id: 5,
    img: "./photos/women/PY5042X1.jpg",
    brand: "Pulsar",
    name: "Ladies Pulsar Dress Watch PH8364X1",
    price: 708,
    moneda: "$"
},
{
    id: 6,
    img: "./photos/women/rolex1.jpg",
    brand: "Rolex",
    name: "Date just Automatic Chronometer Diamond Champagne Dial Women's Watch",
    price: 994,
    moneda: "$"
},
{
    id: 7,
    img: "./photos/women/rolex2.jpg",
    brand: "Rolex",
    name: "Champagne Diamond 18k Yellow Gold & Steel Women's Watch",
    price: 879,
    moneda: "$"
},
{
    id: 8,
    img: "./photos/women/rolex3.jpg",
    brand: "Rolex",
    name: "Date Just Automatic Champagne Dial Women's Watch",
    price: 799,
    moneda: "$"
},
{
    id: 9,
    img: "./photos/women/sekonda1.jpg",
    brand: "Sekonda",
    name: "Women’s Rose Gold Stone Set Bracelet Watch",
    price: 189,
    moneda: "$"
},
{
    id: 10,
    img: "./photos/women/sekonda2.jpg",
    brand: "Sekonda",
    name: "Women’s Bracelet Dress Watch",
    price: 190,
    moneda: "$"
},
{
    id: 11,
    img: "./photos/women/SRP839J1_seiko.jpg",
    brand: "Seiko",
    name: "Presage",
    price: 200,
    moneda: "$"
},
{
    id: 12,
    img: "./photos/women/SRP841J1_seiko.jpg",
    brand: "Seiko",
    name: "Astron",
    price: 301,
    moneda: "$"
}
]
var button_women_watches = document.querySelector("#women_watches");
button_women_watches.addEventListener("click", display_watches_women);
function display_watches_women(e) {
    e.preventDefault();
    pagina_curenta = "women";
    myWhatches(watches_women);
}

var watches_kids = [{
    id: 1,
    img: "./photos/kids/seiko1.webp",
    brand: "Seiko",
    name: "Aruba ALBA character watch Super Mario collaboration model 'BIC size Mario' ACCA401",
    price: 172,
    moneda: "$"
},
{
    id: 2,
    img: "./photos/kids/sekonda1.jpg",
    brand: "Sekonda",
    name: "Childrens watch",
    price: 286,
    moneda: "$"
},
{
    id: 3,
    img: "./photos/kids/kids2.jpg",
    brand: "Rolex",
    name: "Disney Kids' MK1239 Time Teacher Mickey Mouse Watch with Red Rubber Strap",
    price: 862,
    moneda: "$"
},
{
    id: 4,
    img: "./photos/kids/kids2.webp",
    brand: "Pulsar",
    name: "Avengers Black Case Black Rubber Strap Time Teacher Watch",
    price: 201,
    moneda: "$"
}
]
var button_kids_watches = document.querySelector("#kids_watches");
button_kids_watches.addEventListener("click", display_watches_kids);
function display_watches_kids(e) {
    e.preventDefault();
    pagina_curenta = "kids";
    myWhatches(watches_kids);
}

var smartwatches = [{
    id: 1,
    img: "./photos/smart/M430-pulsar.jpg",
    brand: "Pulsar",
    name: "Unisex M430 Bluetooth Wrist HR Smart Activity Tracker Alarm Chronograph Watch 90064404",
    price: 888,
    moneda: "$"
},
{
    id: 2,
    img: "./photos/smart/GBD-800-1-pulsar.jpg",
    brand: "Pulsar",
    name: "G-Shock G-Squad Bluetooth Step Tracker Watch GBD-800-1ER",
    price: 790,
    moneda: "$"
},
{
    id: 3,
    img: "./photos/smart/smart_fossil1.webp",
    brand: "Fossil",
    name: "Smartwatches Explorist Gen 4 Men's Black Ip Watch",
    price: 700,
    moneda: "$"
},
{
    id: 4,
    img: "./photos/smart/smart_fossil2.webp",
    brand: "Fossil",
    name: "Smartwatches Garrett Gen 5 Silicone Bracelet Watch",
    price: 876,
    moneda: "$"
},
{
    id: 5,
    img: "./photos/smart/smart_fossil3.webp",
    brand: "Fossil",
    name: "Smartwatches Sports Pink Silicone Strap Watch",
    price: 800,
    moneda: "$"
},
{
    id: 6,
    img: "./photos/smart/Rolex-SmartWatch.jpg",
    brand: "Rolex",
    name: "Joins Smartwatch Race",
    price: 999,
    moneda: "$"
}
]
var button_smartwatches = document.querySelector("#smartwatches");
button_smartwatches.addEventListener("click", display_smartwatches);
function display_smartwatches(e) {
    e.preventDefault();
    pagina_curenta = "smartwatches";
    myWhatches(smartwatches);
}

var watches_belt = [{
    id: 1,
    img: "./photos/belts/ART7003.jpg",
    brand: "Pulsar",
    name: "Emporio Connected Strap ART7003",
    price: 120,
    moneda: "$"
},
{
    id: 2,
    img: "./photos/belts/belt1.jpg",
    brand: "Seiko",
    name: "Smoot calfskin - black",
    price: 99,
    moneda: "$"
},
{
    id: 3,
    img: "./photos/belts/belt4.jpg",
    brand: "Seiko",
    name: "Smoot calfskin - brown",
    price: 97,
    moneda: "$"
},
{
    id: 4,
    img: "./photos/belts/belt3j.jpg",
    brand: "Fossil",
    name: "Handmade vintage Brown leather watch band, real leather watch strap, 24mm, 26mm, Light Brown stitching",
    price: 110,
    moneda: "$"
},
{
    id: 5,
    img: "./photos/belts/belt2.jpg",
    brand: "Fossil",
    name: "Shell Cordovan Leather Tapered Basic Watch Strap (18, 20, 22 and 24 mm)",
    price: 89,
    moneda: "$"
}
]
var button_watch_belts = document.querySelector("#watch_belts");
button_watch_belts.addEventListener("click", display_watches_belt);
function display_watches_belt(e) {
    e.preventDefault();
    pagina_curenta = "belts";
    myWhatches(watches_belt);
}

function myWhatches(watches) {

    var product_container = document.querySelector(".product-container");
    product_container.innerHTML = "";
    for (var i = 0; i < watches.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "product-box";
        product_container.appendChild(newDiv);

        var img = document.createElement("img");
        img.className = "watch_img";
        img.setAttribute("src", watches[i].img);
        newDiv.appendChild(img);

        var p = document.createElement("p");
        p.innerText = watches[i].name + " " + watches[i].brand;
        newDiv.appendChild(p);

        var h3 = document.createElement("h3");
        h3.innerText = watches[i].price + "$";
        newDiv.appendChild(h3);
        

        var button = document.createElement("button");
        button.innerText = watches[i].buy;
        button.className = "add_to_cart";
        button.textContent = "Add to cart";
        button.setAttribute("data-product_id", watches[i].id)
        newDiv.appendChild(button);
    }
}
pagina_curenta = "men";
var search_text = get_search_text();
var search_brand = get_search_brand();
var select = document.getElementById("sort");
var result_page = document.getElementById("result");
cauta(search_text, search_brand, select.value, result_page.value);