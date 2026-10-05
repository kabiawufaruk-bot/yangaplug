const customer = {
    name: "Olabode",
    age: 15,
    city: "Lagos",
    hasReservation: true,
};

//console.log(customer)
console.log(customer.name)

console.log(customer[`age`])

// for updated
customer.age = 35;
console.log(customer.age);

// for added
customer.accountBalance = 30000;
console.log(customer)

const restaurant = {
    name: "Asa Kitchen",
    city: "Lagos",
    rating: 4.8,
      greet: function () {
         console.log("Welcome to Asa Kitchen!");
    },
    menu: ["Egusi Soup", "Jollof Rice", "Suya Platter"],
    customers:[
      {name: "Olabode", totalOrders: 10, isBanned: false}, 
       {name: "Zainab", totalOrders: 250, isBanned: false},  
        {name: "Muhammed", totalOrders: 5, isBanned: false},  
         {name: "Amoke", totalOrders: 3, isBanned: false},   
    ],
   };

   console.log(restaurant);

   restaurant.greet();

   console.log(restaurant.name);
    console.log(restaurant.rating);

    console.log(restaurant.menu);

 console.log(restaurant.customers.length);
    //console.log(restaurant.customers[0].name);

    for (const customer of restaurant.customers){
        console.log(
            `${customer.name} - Total Orders ${customer.totalOrders} - isBanned: ${customer.isBanned}`,
        );
    }

    const students = [
       {name: "Olabode", email: "kabiawufaruk@gmail.com", plan: "free"},
       {name: "Zainab", email: "zainab@gmail.com", plan: "premium"},
       {name: "Amoke", email: "amoke@gmail.com", plan: "enterprise"},
    ];


    console.log("===========PRATICE========================")
    