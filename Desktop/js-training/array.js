const dish1 = "Egusi Soup";
const dish2 = "Jollof Rice";
const dish3 = "Suya Platter";
const dish4 = "Pounded Yam";

const menu = ["Egusi Soup", "Jollof Rice", "Suya Platter", "Pounded Yam"];

console.log(menu);

const studentNames = [
    "Kabiawu Faruk", // -> 0
    "Rauf Kabiawu", // -> 1
    "Muhammed Kabiawu", // -> 2
    "Zainab Bello", // -> 3
    ];

console.log(studentNames);

const evenNumbers = [2, 4, 6, 10, 12, 14, 16, 18, 20];
console.log(evenNumbers);

const cases = [true, false, false, true, false, true, true, false, false ];
console.log(cases);

const groups =[
    1,  
    2, "Faithful groups",  
    4, "Supreme", 6, 
     7, "Chestain", 
      9,
     10, 
      undefined, 
       null, 
        false 
    ];
console.log(groups);


console.log(groups [4]);





menu.push("Ero Riro"); // push(item) - add item to the end of the array - add to the end ;
console.log("menu", menu)

//studentNames.pop(); // pop - removes and returns the last item - remove from the end;
//console.log("Student names", studentNames)

const studentExists = studentNames.includes("Kabiawu Faruk"); // includes - check if an item exists
console.log("Student exists", studentExists)

const studentIndex = studentNames.indexOf("Zainab Bello"); // indeOf - find the position of an item;
console.log("Student Index", studentIndex)

console.log("Total Students", studentNames.length); // .length- number of items

console.log("=========ARRAY FOR LOOP=============");

// use when you need the index (position) of each item
// Always start loop counter at 0 to match array indexes
for (let i = 0; i < menu.length; i++){
    console.log("Table", i);
    console.log(menu[i]);
}

console.log("=========ARRAY FOR LOOP=============");
// use when you just need the value, cleaner syntax
for (const name of studentNames) {
    console.log(name)
}

const prices = [4500, 6000, 3500, 5500, 10000];

//const sum = prices[0] + prices[1] + prices[2] + prices[3];
//console.log("Total Number", sum);

let sum = 0;

for (const price of prices){
    console.log("Current of sum", sum);
    sum += price;
}

console.log("Total Amount ", sum);



