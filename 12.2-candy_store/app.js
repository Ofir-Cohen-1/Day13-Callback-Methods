const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};


//! 1.
const getCandy = (candyStore, id) => {
    let item = "item not found";
    candyStore.candies.forEach((candy) => {
      if (candy.id === id) {
        item = candy.name;
      }
    });
    return item;
  };
  
  console.log(getCandy(candyStore, "5hd7y"));
  
  //! 2.
  const getPrice = (candyStore, id) => {
    let item = "item not found";
    candyStore.candies.forEach((candy) => {
      if (candy.id === id) {
        item = candy.price;
      }
    });
    return item;
  };
  
  console.log(getPrice(candyStore, "5hd7y"));
  
  //! 3.
  const addCandy = (candyStore, id, name, price) => {
    candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
  };
  
  addCandy(candyStore, "1vh2a", "bamba", 4);
  console.log(candyStore.candies);
  
  //! 4.
  const buy = (candyStore, id) => {
    let itemMsg = "Item not found!";
    candyStore.candies.forEach((candy) => {
      if (candy.id === id) {
        if (candy.amount > 0) {
          candy.amount -= 1;
          candyStore.cashRegister += candy.price;
          itemMsg = "Item Bought!";
        } else {
          itemMsg = "No pieces to sell! amount is: 0";
        }
      }
    });
    console.log(itemMsg);
  };
  
  buy(candyStore, "notfoundtest");
  buy(candyStore, "1vh2a");
  buy(candyStore, "1vh2a");