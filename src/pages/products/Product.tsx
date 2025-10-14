
import ProductTabel from "../../component/ProductTabel";
import products from "../../data/products.json";

const Product = () => {
  return (
    <>
  
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold border-b border-red-400 text-center">
          Our product list
        </h1>
        <div></div>
      </div>
      
      <ProductTabel products={products.products} />
    </>
  );
};

export default Product;
