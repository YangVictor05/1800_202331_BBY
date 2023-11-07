//Database for Walmart Store
function Wmarket() {
  var walmartItems = db.collection("walmart");

  walmartItems.doc("aB1cD2").set({
    id: "aB1cD2",
    description: "Fresh and nutritious milk",
    price: 2.99,
    imgurl: "https://example.com/milk.jpg",
    productFullName: "Milk",
  });

  walmartItems.doc("xY3zEf").set({
    id: "xY3zEf",
    description: "Farm-fresh eggs",
    price: 1.99,
    imgurl: "https://example.com/eggs.jpg",
    productFullName: "Eggs",
  });

  walmartItems.doc("pQ5rGh").set({
    id: "pQ5rGh",
    description: "Whole grain bread",
    price: 3.49,
    imgurl: "https://example.com/bread.jpg",
    productFullName: "Bread",
  });

  walmartItems.doc("sT6uJk").set({
    id: "sT6uJk",
    description: "Long-grain white rice",
    price: 4.99,
    imgurl: "https://example.com/rice.jpg",
    productFullName: "Rice",
  });

  walmartItems.doc("vW7xYl").set({
    id: "vW7xYl",
    description: "Penne pasta made from durum wheat",
    price: 1.79,
    imgurl: "https://example.com/pasta.jpg",
    productFullName: "Pasta",
  });

  walmartItems.doc("mZ8aNm").set({
    id: "mZ8aNm",
    description: "Sweet and crunchy apples",
    price: 0.99,
    imgurl: "https://example.com/apples.jpg",
    productFullName: "Apples",
  });

  walmartItems.doc("bB9oPn").set({
    id: "bB9oPn",
    description: "Delicious and ripe bananas",
    price: 0.59,
    imgurl: "https://example.com/bananas.jpg",
    productFullName: "Bananas",
  });

  walmartItems.doc("kC0qAr").set({
    id: "kC0qAr",
    description: "Juicy and refreshing oranges",
    price: 1.29,
    imgurl: "https://example.com/oranges.jpg",
    productFullName: "Oranges",
  });

  walmartItems.doc("dD1rBs").set({
    id: "dD1rBs",
    description: "Crisp lettuce for salads",
    price: 1.49,
    imgurl: "https://example.com/lettuce.jpg",
    productFullName: "Lettuce",
  });

  walmartItems.doc("lE2sCt").set({
    id: "lE2sCt",
    description: "Sweet and tangy tomatoes",
    price: 0.79,
    imgurl: "https://example.com/tomatoes.jpg",
    productFullName: "Tomatoes",
  });

  walmartItems.doc("fF3uDv").set({
    id: "fF3uDv",
    description: "Crunchy carrots",
    price: 0.69,
    imgurl: "https://example.com/carrots.jpg",
    productFullName: "Carrots",
  });

  walmartItems.doc("gG4wEx").set({
    id: "gG4wEx",
    description: "Fresh chicken breast",
    price: 5.99,
    imgurl: "https://example.com/chicken.jpg",
    productFullName: "Chicken Breast",
  });

  walmartItems.doc("hH5xJy").set({
    id: "hH5xJy",
    description: "Lean ground beef",
    price: 4.49,
    imgurl: "https://example.com/beef.jpg",
    productFullName: "Ground Beef",
  });

  walmartItems.doc("iI6zKz").set({
    id: "iI6zKz",
    description: "Tender fish fillet",
    price: 6.99,
    imgurl: "https://example.com/fish.jpg",
    productFullName: "Fish Fillet",
  });

  walmartItems.doc("jJ7AL1").set({
    id: "jJ7AL1",
    description: "Creamy butter",
    price: 2.49,
    imgurl: "https://example.com/butter.jpg",
    productFullName: "Butter",
  });

  walmartItems.doc("kK8BM2").set({
    id: "kK8BM2",
    description: "Variety of cheese",
    price: 3.79,
    imgurl: "https://example.com/cheese.jpg",
    productFullName: "Cheese",
  });

  walmartItems.doc("lL9cN3").set({
    id: "lL9cN3",
    description: "Thick and creamy yogurt",
    price: 1.29,
    imgurl: "https://example.com/yogurt.jpg",
    productFullName: "Yogurt",
  });

  walmartItems.doc("mM0dO4").set({
    id: "mM0dO4",
    description: "Healthy and crunchy cereal",
    price: 3.99,
    imgurl: "https://example.com/cereal.jpg",
    productFullName: "Cereal",
  });

  walmartItems.doc("nN1eP5").set({
    id: "nN1eP5",
    description: "Tasty canned beans",
    price: 1.29,
    imgurl: "https://example.com/beans.jpg",
    productFullName: "Canned Beans",
  });

  walmartItems.doc("oO2fQ6").set({
    id: "oO2fQ6",
    description: "High-quality canned tomatoes",
    price: 1.49,
    imgurl: "https://example.com/tomatoes-canned.jpg",
    productFullName: "Canned Tomatoes",
  });

  walmartItems.doc("pP3gR7").set({
    id: "pP3gR7",
    description: "Variety of frozen vegetables",
    price: 2.79,
    imgurl: "https://example.com/frozen-vegetables.jpg",
    productFullName: "Frozen Vegetables",
  });

  walmartItems.doc("qQ4hS8").set({
    id: "qQ4hS8",
    description: "Delicious frozen pizza",
    price: 4.99,
    imgurl: "https://example.com/frozen-pizza.jpg",
    productFullName: "Frozen Pizza",
  });

  walmartItems.doc("rR5iU9").set({
    id: "rR5iU9",
    description: "Creamy peanut butter",
    price: 3.29,
    imgurl: "https://example.com/peanut-butter.jpg",
    productFullName: "Peanut Butter",
  });

  walmartItems.doc("sS6jV0").set({
    id: "sS6jV0",
    description: "Sweet jam or jelly",
    price: 2.49,
    imgurl: "https://example.com/jam.jpg",
    productFullName: "Jam",
  });

  walmartItems.doc("tT7kW1").set({
    id: "tT7kW1",
    description: "Crunchy snack chips",
    price: 1.99,
    imgurl: "https://example.com/chips.jpg",
    productFullName: "Snack Chips",
  });

  walmartItems.doc("uU8lX2").set({
    id: "uU8lX2",
    description: "Rich and aromatic coffee",
    price: 8.99,
    imgurl: "https://example.com/coffee.jpg",
    productFullName: "Coffee",
  });

  walmartItems.doc("vV9mY3").set({
    id: "vV9mY3",
    description: "Variety of tea blends",
    price: 3.49,
    imgurl: "https://example.com/tea.jpg",
    productFullName: "Tea",
  });

  walmartItems.doc("wW0nZ4").set({
    id: "wW0nZ4",
    description: "Refreshing bottled water",
    price: 0.99,
    imgurl: "https://example.com/bottled-water.jpg",
    productFullName: "Bottled Water",
  });

  walmartItems.doc("xX1oA5").set({
    id: "xX1oA5",
    description: "Soft and gentle toilet paper",
    price: 5.99,
    imgurl: "https://example.com/toilet-paper-soft.jpg",
    productFullName: "Toilet Paper",
  });
}

//Database for Costco Store

function Cmarket() {
  var costcoItems = db.collection("costco");

  costcoItems.doc("1a2b3c").set({
    id: "1a2b3c",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "https://example.com/milk.jpg",
    productFullName: "Milk",
  });

  costcoItems.doc("4e5f6g").set({
    id: "4e5f6g",
    description: "Farm-fresh eggs",
    price: 2.29,
    imgurl: "https://example.com/eggs.jpg",
    productFullName: "Eggs",
  });

  costcoItems.doc("7h8i9j").set({
    id: "7h8i9j",
    description: "Whole grain bread",
    price: 3.99,
    imgurl: "https://example.com/bread.jpg",
    productFullName: "Bread",
  });

  costcoItems.doc("k0l1m2").set({
    id: "k0l1m2",
    description: "Long-grain white rice",
    price: 5.49,
    imgurl: "https://example.com/rice.jpg",
    productFullName: "Rice",
  });

  costcoItems.doc("3n4o5p").set({
    id: "3n4o5p",
    description: "Penne pasta made from durum wheat",
    price: 1.99,
    imgurl: "https://example.com/pasta.jpg",
    productFullName: "Pasta",
  });

  costcoItems.doc("6q7r8s").set({
    id: "6q7r8s",
    description: "Sweet and crunchy apples",
    price: 1.19,
    imgurl: "https://example.com/apples.jpg",
    productFullName: "Apples",
  });

  costcoItems.doc("9t0u1v").set({
    id: "9t0u1v",
    description: "Delicious and ripe bananas",
    price: 0.79,
    imgurl: "https://example.com/bananas.jpg",
    productFullName: "Bananas",
  });

  costcoItems.doc("2w3x4y").set({
    id: "2w3x4y",
    description: "Juicy and refreshing oranges",
    price: 1.59,
    imgurl: "https://example.com/oranges.jpg",
    productFullName: "Oranges",
  });

  costcoItems.doc("5z6A7B").set({
    id: "5z6A7B",
    description: "Crisp lettuce for salads",
    price: 1.29,
    imgurl: "https://example.com/lettuce.jpg",
    productFullName: "Lettuce",
  });

  costcoItems.doc("8C9d0E").set({
    id: "8C9d0E",
    description: "Sweet and tangy tomatoes",
    price: 0.89,
    imgurl: "https://example.com/tomatoes.jpg",
    productFullName: "Tomatoes",
  });

  costcoItems.doc("1E2F3G").set({
    id: "1E2F3G",
    description: "Crunchy carrots",
    price: 0.99,
    imgurl: "https://example.com/carrots.jpg",
    productFullName: "Carrots",
  });

  costcoItems.doc("4G5H6I").set({
    id: "4G5H6I",
    description: "Fresh chicken breast",
    price: 6.49,
    imgurl: "https://example.com/chicken.jpg",
    productFullName: "Chicken Breast",
  });

  costcoItems.doc("7H8I9J").set({
    id: "7H8I9J",
    description: "Lean ground beef",
    price: 4.79,
    imgurl: "https://example.com/beef.jpg",
    productFullName: "Ground Beef",
  });

  costcoItems.doc("0I1J2K").set({
    id: "0I1J2K",
    description: "Tender fish fillet",
    price: 7.99,
    imgurl: "https://example.com/fish.jpg",
    productFullName: "Fish Fillet",
  });

  costcoItems.doc("3K4L5M").set({
    id: "3K4L5M",
    description: "Creamy butter",
    price: 2.79,
    imgurl: "https://example.com/butter.jpg",
    productFullName: "Butter",
  });

  costcoItems.doc("6M7N8O").set({
    id: "6M7N8O",
    description: "Variety of cheese",
    price: 3.19,
    imgurl: "https://example.com/cheese.jpg",
    productFullName: "Cheese",
  });

  costcoItems.doc("9N0O1P").set({
    id: "9N0O1P",
    description: "Thick and creamy yogurt",
    price: 1.39,
    imgurl: "https://example.com/yogurt.jpg",
    productFullName: "Yogurt",
  });

  costcoItems.doc("2O3P4Q").set({
    id: "2O3P4Q",
    description: "Healthy and crunchy cereal",
    price: 4.29,
    imgurl: "https://example.com/cereal.jpg",
    productFullName: "Cereal",
  });

  costcoItems.doc("5P6Q7R").set({
    id: "5P6Q7R",
    description: "Tasty canned beans",
    price: 1.69,
    imgurl: "https://example.com/beans.jpg",
    productFullName: "Canned Beans",
  });

  costcoItems.doc("8R9S0T").set({
    id: "8R9S0T",
    description: "High-quality canned tomatoes",
    price: 1.99,
    imgurl: "https://example.com/tomatoes-canned.jpg",
    productFullName: "Canned Tomatoes",
  });

  costcoItems.doc("1S2T3U").set({
    id: "1S2T3U",
    description: "Variety of frozen vegetables",
    price: 2.59,
    imgurl: "https://example.com/frozen-vegetables.jpg",
    productFullName: "Frozen Vegetables",
  });

  costcoItems.doc("4U5V6W").set({
    id: "4U5V6W",
    description: "Delicious frozen pizza",
    price: 5.99,
    imgurl: "https://example.com/frozen-pizza.jpg",
    productFullName: "Frozen Pizza",
  });

  costcoItems.doc("7W8X9Y").set({
    id: "7W8X9Y",
    description: "Creamy peanut butter",
    price: 3.49,
    imgurl: "https://example.com/peanut-butter.jpg",
    productFullName: "Peanut Butter",
  });

  costcoItems.doc("0X1Y2Z").set({
    id: "0X1Y2Z",
    description: "Sweet jam or jelly",
    price: 2.29,
    imgurl: "https://example.com/jam.jpg",
    productFullName: "Jam",
  });

  costcoItems.doc("3Y4Z5A").set({
    id: "3Y4Z5A",
    description: "Crunchy snack chips",
    price: 2.09,
    imgurl: "https://example.com/chips.jpg",
    productFullName: "Snack Chips",
  });

  costcoItems.doc("6Z7A8B").set({
    id: "6Z7A8B",
    description: "Rich and aromatic coffee",
    price: 9.49,
    imgurl: "https://example.com/coffee.jpg",
    productFullName: "Coffee",
  });
}
