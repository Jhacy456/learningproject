import {apiClient} from "./config"; 

export const apiGetProducts = async () =>{
     apiClient.get ("/products" );
    }

export const apiAddProduct = async (payLoad) => {
    apiClient.post ("/products",payLoad);
};
    
  

export const apiGetSingleProduct = async (slug) =>{
    return apiClient.get (`/products/${slug}`);
};