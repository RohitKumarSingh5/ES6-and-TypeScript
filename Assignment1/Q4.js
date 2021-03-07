let names = ["Tom", "Ivan", "Jerry"];

let arr = new Array();

names.forEach((x) =>
  arr.push({
    name: x,
    length: x.length,
  })
);

console.log(arr);