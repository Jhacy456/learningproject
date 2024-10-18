import { toast } from "react-toastify";
import { apiGetProducts } from "../../services/product";

const Products = () => {
    let products = [] 
    console.log("First", products)
  const fetchData = async () => {
    try {
      const products = await apiGetProducts();
      // products = [
      //   {name: "Strapless Bra", slug: "1-e"},
      //   {name: "Sneakers", slug: "2-s"},
      // ];
      console.log("Products:", products);
      
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  fetchData();
  console.log("Second", products)
  return <div>Products</div>;
};

export default Products;
