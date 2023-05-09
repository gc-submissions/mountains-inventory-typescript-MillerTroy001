import { Mountain } from "./models/Mountain";
import { Product } from "./models/Products";
import { InventoryItem } from "./models/Inventory";

let mountains = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain: Mountain = array[0];
  array.forEach((item) => {
    if (item.height > tallestMountain.height) {
      tallestMountain = item;
    }
  });
  return tallestMountain.name;
};
// console.log(findNameOfTallestMountain(mountains));

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
// console.log(calcAveragePrice(products));

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  let totalValue = 0;
  array.forEach((item) => {
    totalValue += item.product.price * item.quantity;
    console.log(totalValue);
  });
  return totalValue;
};

//console.log(calcInventoryValue(inventory));
