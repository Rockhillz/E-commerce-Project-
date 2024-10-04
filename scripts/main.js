
// My local container with products 
const productListing = [
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfJL0if7jLQrc5Rcku96l410MHmvA6xqytA&s",
      productName: "Samsung Smart TV",
      price: "$1200",
    },
    {
      productImage: "https://www.jamarahome.com/cdn/shop/products/RT20HAR2DSA_UT.jpg?v=1678428946",
      productName: "LG Refrigerator",
      price: "$2500",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbgR6wJzSQd47scsyTkI8HVUa-jpaMcwk6A&s",
      productName: "HP Spectre x360",
      price: "$1400",
    },
    {
      productImage: "https://img.freepik.com/premium-photo/3d-washing-machine-isolated-white-background-washing-machine-washing-cloth-bathroom-equipment-can-be-used-many-purposes-trendy-modern-vector_839035-1753510.jpg",
      productName: "Aso Washing Machine",
      price: "$1800",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah_Ue7KBL8YXyA2K92hXZTfhhH9RR_j2Hhw&s",
      productName: "Xiomi Phone",
      price: "$1000",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmI1ftk-eKV8imVJ0lM-qwQoxLEgXYgm6DomEffwdVmAYn2vmR6gfioUWoCNi0koxcg4Q&usqp=CAU",
      productName: "Acer Swift 3",
      price: "$900",
    },
    {
      productImage: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726617600&semt=ais_hybrid",
      productName: "Headphone",
      price: "$1500",
    },
    {
      productImage: "https://www.bhphotovideo.com/images/fb/microsoft_aik_00026_surface_laptop_studio_i7_32_2tb_quad_1675323.jpg",
      productName: "Razer Blade 15",
      price: "$2600",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUDKW4z3EQ6-IPhJM043_VSXmScAVcF-qgQ&s",
      productName: "Microsoft Surface Laptop 4",
      price: "$1500",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4gQqPA7A2todn_likCs1-GcOFtr2bajp-w&s",
      productName: "OX Standing Fan",
      price: "$2600",
    }
];
// console.log(productListing);

let newProd = document.getElementById("newListing");
// console.log(newProd)


for (let i = 0; i < productListing.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "carddy");
    
    // create product image 
    let prodImage = document.createElement("img");
    prodImage.src = productListing[i].productImage;
    newDiv.appendChild(prodImage);

    // create product name 
    let prodName = document.createElement("h6");
    prodName.innerHTML = productListing[i].productName;
    newDiv.appendChild(prodName);

    // add price 
    let prodPrice = document.createElement("h4");
    prodPrice.innerHTML = productListing[i].price
    newDiv.appendChild(prodPrice)

    // Add what created to product list
    newProd.appendChild(newDiv)


}


// OOP Checkpoint 
// Why the class has been created, and it is being pushed into the Array, it is not being updtaed dynamically into DOM 
class productObj {
  constructor(image, name, price) {
    this.productimage = image;
    this.productname = name;
    this.price = price
  }
}

let proding = new productObj("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfJL0if7jLQrc5Rcku96l410MHmvA6xqytA&s", "Sammy", "$40")
console.log(proding)

function pushin() {
  productListing.push(proding)
}

pushin()
console.log(productListing)


// creting class for the cartbox 

class shoppingCart {
  constructor(name, price, qtn) {
    this.name = name;
    this.price = price;
    this.qtn = qtn
 }

    // calculating total price 
    totalPrice() {
     return this.price * this.qtn
  }
}

const prodi = new shoppingCart("Izuchi", 200, 5)
console.log(prodi)
prodi.totalPrice()


// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances.

// Class for the shopping cart containing an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add an item to the cart
  addItem(item) {
    this.items.push(item);
  }

  // Method to calculate the total price of all items in the cart
  calculateTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.totalPrice();
    });
    return total;
  }

  // Method to remove an item by name
  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  // Method to display all items in the cart
  displayCart() {
    console.log("Shopping Cart Items:");
    this.items.forEach(item => {
      console.log(`${item.name} - Quantity: ${item.quantity}, Price: ${item.price}`);
    });
  }
}

// Example usage
const cart = new ShoppingCart();
const item1 = new ShoppingCartItem("Izuchi", 200, 5);
const item2 = new ShoppingCartItem("Samsung TV", 1200, 1);

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);

// Display the cart
cart.displayCart();

// Calculate the total price of all items
console.log("Total Price: $" + cart.calculateTotal());

// Remove an item and display the updated cart
cart.removeItem("Izuchi");
cart.displayCart();

