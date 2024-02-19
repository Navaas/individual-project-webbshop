export interface Product {
  id: string;
  title: string;
  price: number;
}

export const mockedProducts: Product[] = [
  {
    id: "1",
    title: "Mössa",
    price: 149,
  },
  {
    id: "2",
    title: "Vantar",
    price: 149,
  },
  {
    id: "3",
    title: "Halsduk",
    price: 249,
  },
];
