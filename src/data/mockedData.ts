import test from "../image/test.png";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export const mockedProducts: Product[] = [
  {
    id: "1",
    title: "Vita strumpor",
    price: 99,
    image: test,
  },
  {
    id: "2",
    title: "Gula byxor",
    price: 999,
    image: test,
  },
  {
    id: "3",
    title: "Svart jacka",
    price: 1999,
    image: test,
  },
];
