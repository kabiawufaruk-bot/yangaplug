function greet (name){
    console.log(`${name}, you are welcome to our website`);
}

greet("Olabode");
greet("Joshua");
greet("Ololade Kabiawu");
greet("Zainab");

function addToCart(customerName, dish, price = 2500){
    console.log(`${customerName} added ${dish} of ₦${price} to cart`);
}

addToCart("Olabode", "Fried Rice", 3000);
addToCart("Zainab", "Beans & plantain", 6000);
addToCart("Chioma", "Semo");


function addNumber(firstNum, secondNum){
    const total = firstNum + secondNum;
   return total;
}

const addition1 = addNumber(14, 3);
const addition2 = addNumber(2, 6);

console.log(addition2);

function userIsAnAdult(age){
    if (age >=18) {
        return true;
        } else {
            return true;
             }
        }

        const isSamuelAnAdult = userIsAnAdult(21);
         const isMatthewAnAdult = userIsAnAdult(16);

         console.log("Sam is an adult", isSamuelAnAdult);
         console.log("Matthew is an adult", isMatthewAnAdult);

         const customerAge = 38;
         if (userIsAnAdult (customerAge)){
            console.log("User is an adult, you can proceed with the onboarding")
            } else{
                console.log("User is an underge, abort the onboarding")
         }

         console.log(userIsAnAdult(50));


         function anotherFunction(){

         }

        console.log(anotherFunction())

        
        console.log("=============================BREAKPOINT=============================")


          const olabodeTotal = getTotalBill(4500, 2);
          console.log(olabodeTotal); // 9900


          const joshuaTotal = getTotalBill(6000, 1);
          console.log(joshuaTotal); // 6600

          const zainabTotal = getTotalBill(5000, 3);
          console.log(zainabTotal); // 18150

          function getTotalBill(price, quantity){
            const subtotal = price * quantity;
            const charge = subtotal  * 0.1;
            return subtotal + charge;
          }
