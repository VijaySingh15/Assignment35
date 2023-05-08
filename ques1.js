const shoppingCart=['Milk','Coffee','Tea','Honey'];
//adding meat in array at first position
shoppingCart.unshift('Meat');
console.log(shoppingCart);
//adding sugar in array at last position
shoppingCart.push('Sugar');
console.log(shoppingCart);
//remove honey in a array
shoppingCart.splice(4,1);
console.log(shoppingCart);
//modify tea to Green Tea
shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);
