const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1.
const getName = (arr) => {
  const array = [];
  arr.forEach(function (data) {
    array.push({ name: data.name });
  });
  return array;
};
console.log(getName(data));


//2.
const getBorns = (arr) => {
    return arr.filter((obj) => obj.birthday.split("-")[2] < 1990);
  };
  console.log(getBorns(data));

  //3. 
  const differentFoods = (arr) => {
    const result = {};
    arr.forEach((obj) => {
      obj.favoriteFoods.meats.forEach((meal) => {
        if (result[meal]) {
          result[meal] += 1;
        } else {
          result[meal] = 1;
        }
      });
      obj.favoriteFoods.fish.forEach((meal) => {
        if (result[meal]) {
          result[meal] += 1;
        } else {
          result[meal] = 1;
        }
      });
    });
    return result;
  };
  
  console.log(differentFoods(data));