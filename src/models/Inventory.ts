import { Product } from "../models/Products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}
