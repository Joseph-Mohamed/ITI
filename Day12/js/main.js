
var gamingStore = {
    storeName: "Gaming Store",
    owner: "Youssef",
    isOpened: true,
    products: [
        { id: 1, name: "PlayStation 5", price: 25000, stock: 4 },
        { id: 2, name: "Gaming Keyboard", price: 1500, stock: 12 },
        { id: 3, name: "Wireless Mouse", price: 800, stock: 0 },
        { id: 4, name: "Gaming Headset", price: 2200, stock: 7 }
    ],
    
    showStoreInfo: function() {
        console.log(`--- Welcome to ${gamingStore.storeName} | Owner: ${gamingStore.owner} ---`);
    }
};

gamingStore.showStoreInfo();


function calculateDiscount(price, discountPercentage) {
    var finalPrice = price - (price * (discountPercentage / 100));
    return finalPrice;
}

var checkAvailability = (stock) => {
    if (stock > 0) return "Available";
    else return "Out of Stock";
};


console.log("Displaying products using for loop");

for (var i = 0; i < gamingStore.products.length; i++) {
    var item = gamingStore.products[i];
    var status = checkAvailability(item.stock);
    console.log(`Item: ${item.name} | Price: ${item.price} EGP | Status: ${status}`);
}


console.log("\nUsing a while loop to");

var remainingCustomers = 3; 
while (remainingCustomers > 0) {
    console.log(`Served customer ${remainingCustomers}, ${remainingCustomers - 1} customers remaining in line`);
    remainingCustomers--; 
}
