console.log("test");

const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);

const myName = "Bob Frank";

const fName = "Bob";
const lName = "Frank";

const sentance = `Hello ${fName} ${lName} how are you?`;

console.log(sentance);

const isTheSkyBlue = true;

console.log(isTheSkyBlue);

function findLargestNumber(list) {
  // return the largest number in array
  list.sort(function (a, b) {
    return b - a;
  });

  return list[0];
}

console.log(findLargestNumber([0, 3, 6, 2]));

function makeDogObject() {
  // return a dog object that
  //   has a speak method that returns woof
  //   has a name property of "Fido"
  //   has a color property of "white"
  //   has an age property of 6
  const dog = {
    name: "Fido",
    color: "white",
    age: 6,
    speak() {
      console.log("woof");
    },
  };
}

console.log(makeDogObject());

const dog = {
  name: "Fido",
  color: "white",
  age: 6,
  speak() {
    console.log("woof");
  },
};
const dog2 = {
  name: "Frank",
  color: "white",
  age: 6,
  speak() {
    console.log("woof");
  },
};

const ar = [dog, dog2];

const nameList = [];

ar.forEach((element) => {
  nameList.push(element.name);
});

console.log(nameList);

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const tracker = {
  runningTotal: 0,
  items: 0,
};
inventory.forEach((element) => {
  tracker.runningTotal += element.quantity;
  tracker.items += 1;
});

console.log(tracker);
console.log(tracker.runningTotal / tracker.items);

const typeList = [];

inventory.forEach((element) => {
  if (element.type.includes("it")) typeList.push(element.name);
});

console.log(typeList);
