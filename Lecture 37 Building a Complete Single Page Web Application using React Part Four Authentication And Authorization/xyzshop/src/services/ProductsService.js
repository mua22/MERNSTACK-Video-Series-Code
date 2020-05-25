import GenericService from "./GenericService";
class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("products", data);
  deleteProduct = (_id) => this.delete("products/" + _id);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
}

let productService = new ProductsService();
export default productService;
