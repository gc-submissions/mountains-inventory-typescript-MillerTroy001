import { Product } from "./models/Products";

let products: Product[] = [
  { name: "candy", price: 1 },
  { name: "jerky", price: 9 },
  { name: "chips", price: 4 },
  { name: "pop", price: 2 },
  { name: "gum", price: 3 },
];

const calcAveragePrice = (array: Product[]): number => {
  let averageCost = 0;
  array.forEach((item) => {
    averageCost += item.price;
  });
  return averageCost / array.length;
};

console.log(calcAveragePrice(products));

module.exports = { calcAveragePrice };
