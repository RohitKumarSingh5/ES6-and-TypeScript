let x, b, c, d;

[x, b, c, d] = [1, 2, 3, 4];
console.log(c);

let organization = {
  name: "xyz",
  address: {
    pincode: 12345,
  },
};

const {
  address: { pincode },
} = organization;
console.log(pincode);