/**
 * Generic action
 */
export interface Action<T> {
  type: string;
  payload?: T;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  created: Date;
}