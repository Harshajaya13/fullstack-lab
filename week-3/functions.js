const cart = [
{item:"laptop",price:90000},
{item:"phone",price:16000},
{item:"bag",price:1000},
{item:"mouse",price:700}
]

function TotalCost(items){
	let total = 0
	for (let i=0;i<items.length;i++){
		total+=items[i].price;
	}
	return total
}
console.log("Total Price:",TotalCost(cart));

function addItems(array,newItem,newValue){
	const newObject= {item:newItem,price:newValue}
	array.push(newObject)
	return array
}


console.log("Add Item:",addItems(cart,"charger",1500));
console.log("Total Price:",TotalCost(cart));


// this is object oriented 
console.log("Object Oriented Cart System");

class ShoppingMart{
	constructor(){
 	 this.cart = []
	}
	
	
	addItem(name,price){
	  this.cart.push({item:name,price:price});
	  console.log(`Added "${name}" for $${price}`);
	}


	totalCost(){
	  let total = 0;
	  for (let i =0;i<this.cart.length;i++){
	  	total+=this.cart[i].price;
	}
	return total;
	}


 	displayCart() {
   	 console.log("Current Cart Items:", this.cart);
 	 }

	discount(percent){
		const originalAmount = this.totalCost()
		const discountAmount = (originalAmount*percent)/100;
		const finalTotal  = originalAmount - discountAmount;
		console.log("Discount Price:",discountAmount);
	return finalTotal
	}

	clearCart() {
 	   this.cart = [];
  	   console.log("Cart has been cleared.");
	}
}


const myCart = new ShoppingMart();
myCart.addItem("laptop", 90000);
myCart.addItem("phone", 16000);
myCart.addItem("bag", 1000);
console.log("Total Price: ₹", myCart.totalCost());
console.log("Total Price with discount:",myCart.discount(10));
