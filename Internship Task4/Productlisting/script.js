// New product details for product listing page
const products = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 2999, image: "images/earbuds.jpg" },
  { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 4499, image: "images/speaker.jpg" },
  { id: 3, name: "Running Shoes", category: "Fashion", price: 3499, image: "images/shoes.jpg" },
  { id: 4, name: "Casual Backpack", category: "Fashion", price: 1999, image: "images/backpack.jpg" },
  { id: 5, name: "Office Chair", category: "Furniture", price: 8999, image: "images/chair.jpg" },
  { id: 6, name: "Study Table", category: "Furniture", price: 11999, image: "images/table.jpg" },
  { id: 7, name: "Moisturizing Cream", category: "Personal Care", price: 499, image: "images/cream.jpg" },
  { id: 8, name: "Hair Shampoo", category: "Personal Care", price: 699, image: "images/shampoo.jpg" },
  { id: 9, name: "Protein Powder", category: "Health", price: 2499, image: "images/protein.jpg" },
  { id: 10, name: "Multivitamin Tablets", category: "Health", price: 1599, image: "images/multivitamin.jpg" },
  { id: 11, name: "Electric Kettle", category: "Home Appliances", price: 1799, image: "images/kettle.jpg" },
  { id: 12, name: "Mixer Grinder", category: "Home Appliances", price: 3299, image: "images/mixer.jpg" },
  { id: 13, name: "Notebook Set", category: "Stationery", price: 399, image: "images/notebook.jpg" },
  { id: 14, name: "Ball Pen Pack", category: "Stationery", price: 249, image: "images/pen.jpg" },
  { id: 15, name: "Water Bottle", category: "Accessories", price: 599, image: "images/bottle.jpg" },
  { id: 16, name: "Digital Wrist Watch", category: "Accessories", price: 2799, image: "images/watch.jpg" }
];



// get all the reference that are required during product listed
const productContainer = document.getElementById('product-list');
const selectCategory = document.getElementById('category');
const productSort = document.getElementById('sort');

// render all the product list
function renderProducts(products) {
  productContainer.innerHTML = ""; // empty existing product list details
  products.forEach((product) => { // render one by one product
    const card = document.createElement("div");
    card.classList.add("product-card"); // add style in to each product card
    // list out product related details inside the card
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">₹${product.price}</p>
    `;
    productContainer.appendChild(card); // render the product details on my UI
  });
}

// Apply filters and sorting
function applyFilters(){
    // store the filtered data 
    let filteredProduct = [...products]; // store the filtered product
    const category = selectCategory.value; // get category value
    const sort = productSort.value; // get sort value
    if(category !== 'All'){ // check category
        filteredProduct = filteredProduct.filter((p)=> p.category === category);
    }
    // check price range on every product
    if(sort === 'Low To High'){
        filteredProduct.sort((a,b)=>a.price - b.price);
    } else if(sort === 'High To Low'){
         filteredProduct.sort((a,b)=>b.price - a.price);
    }
      renderProducts(filteredProduct);
}

// add change event listener
selectCategory.addEventListener("change",applyFilters);
productSort.addEventListener('change',applyFilters);

// Initial rendering
renderProducts(products);