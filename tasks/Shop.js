let cartQuantity = 0;

function resetCart () {
    cartQuantity = 0;
      console.log('Cart was reset.');
      console.log(`Cart quantity: ${cartQuantity}`);
}
// Funktion um den Warenkorb wieder auf 0 zu setzen


function updateCartQunatity(input) {
    if (cartQuantity + input > 10) {
      alert('The Cart is full');
      return
    } 
    if (cartQuantity + input < 0) {
      alert('Not enough items in the cart');
      return
    }
    
    cartQuantity += input;
    console.log(`Cart quanitity: ${cartQuantity}`)
    
  }
  // Funktion um Produkte den Warenkorb hinzuzufügen und zu entfernen.
  // Maximal 10, Mindestens 0


function showQuantity () {
    console.log(`Cart quantity: ${cartQuantity}`);
  }
  // Gibt die aktuelle Menge der Produkte des Warenkorbs zurück.


const product1 = {
    name: 'Basketball',
    price: 2095,
}

const product2 = {
    name: 'Football',
    price: 3000
}

const product3 = {
  name: 'Basketball',
  price: 2095,
}

/*Function die die Preise von 2 Objekten vergleicht und das günstigere zurückgibt

function comparePrice (product1, product2) {
    if (product1.price < product2.price) {
        return product1
        
    }
    if (product1 > product2) {
        return product2
    }
}
console.log(comparePrice(product1, product2))
*/


/* vergleicht 2 Objekte und überprüft ob in beiden objekten die sleben werte enthalten sind.

function isSameProduct (product1,product3) {
  if(product1.price === product3.price && product1.name === product3.name) {
    return true
  } else {
    return false
  }
}

console.log(isSameProduct(product1,product3))
*/


/* Gibt einen string in lowercase zurück

function lowercase(input) {
  console.log(input.toLowerCase())
}

lowercase('Good Morning')
*/



/* gibt einen Inpuut beliebig oft zurück

function repeat(input) {
  for (let i = 0; i < 5; i++) {
    console.log(input)
  }
}

repeat('Hallo')

console.log('Hallo'.repeat(3))
*/



