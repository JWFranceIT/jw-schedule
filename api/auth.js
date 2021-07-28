import { useQuery } from "react-query";
import { login } from "./database";
import { GET_LOGIN } from "./queries";

export const useLogin = ({ Supplier, Product_order }) =>
  useQuery("product_orders", () => login({ Supplier, Product_order }));
