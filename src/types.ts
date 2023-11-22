export type SaleType = {
  id: number;
  product_name: string;
  total: number;
  category: string;
  quantity: number;
  client: string;
  date: string;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

export type ClientType = {
  id: number;
  name: string;
  total: number;
  address: string;
  phone_number: number;
};
