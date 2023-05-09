import { InventoryItem } from "./models/Inventory";

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

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let totalValue = 0;
  array.forEach((item) => {
    totalValue += item.product.price * item.quantity;
  });
  return totalValue;
};

console.log(calcInventoryValue(inventory));

module.exports = {
  calcInventoryValue,
};
