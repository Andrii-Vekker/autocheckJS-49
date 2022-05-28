// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFree = 50;
 const totalPrice = pricePerDroid * orderedQuantity + deliveryFree;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFree} credits) is included in total price.`
console.log(totalPrice)
console.log(message)