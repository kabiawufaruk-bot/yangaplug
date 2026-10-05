const expo = 10 ** 5;
console.log(expo);

let firstNumber = 10;
firstNumber += 5;
console.log(firstNumber);


let secondNum = 10;
secondNum -= 5; // 5
console.log(secondNum);

let thirdNum = 6;
thirdNum *= 3;
console.log(thirdNum);

let fourthNum = 14;
fourthNum /= 2; // 7
console.log(fourthNum);

fourthNum++;
console.log(fourthNum);

secondNum--;
console.log(secondNum);

const age = 20;
const hasId = true;

// && (AND) -> Both Conditions has to be true
// || (OR) -> At least one Conditions has to be true
// ! (NOT) -> (flip the actual value)

// !true -> false
// !false -> true

// And both has to be true
console.log(age >= 18 && hasId); // true
console.log(age >= 18 && !hasId); // false


// OR at least one has to be true
console.log(age >= 18 || hasId); // true (both true)
console.log(age < 18 || hasId); // true (one is true)

console.log(!hasId); // false (flip the actual value)
console.log(!false); // true

const isOlabodeAtHome = false;
const isNeigbhorAtHome = true;

// If any of these conditions are met, you are performing the same actions
//if (isOlabodeAtHome || isNeigbhorAtHome){
    //console.log("Drop it at thier gate");
//}


// You're perfoming different actions based on the condition.
if (isOlabodeAtHome) {
    console.log("Give him the package...");
   } else if (isNeigbhorAtHome) {
    console.log("Olabode is not at home, but we found his neigbhor, we are giving his neigbhor the package..");
}else {
    console.log("Olabode is not at home, returning package back to the store");
}

const score = 72;

if (score >= 90) {
    console.log("Grade: A")
    } else if (score >= 80) {
        console.log("Grade: B");
         } else if (score >= 70) {
            console.log("Grade: C");
             } else {
                 console.log("Grade: F");
  }

const hasReservation = true;
  const restaurantOpen = true;

  if (age >= 18 && hasReservation && restaurantOpen) {
    console.log("Welcome to Asa Kitchen");
  }else{
    console.log("Sorry, we cannot seat you right now.");
  }

  const isMember = false;
  const hasVoucher = true;
  if (isMember || hasVoucher) {
    console.log("100% discount applied");
  }