let id = 1;
let title = "abc";
let price = 100;

var Order = {
  id,
  title,
  price,
  printOrder(id, title, price) {
    console.log(id + " " + title + " " + price);
  },
  getPrice() {
    return price;
  },
};

var copyOfOrder = Object.assign(Order);