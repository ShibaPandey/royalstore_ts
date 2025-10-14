import productTableHead from "../constants/productsTableHead";
import type { productsType } from "../types/productsType";

const ProductTabel = (props: productsType) => {
  const { products } = props;
  return (
    <div className="py-10 px-12 border border-gray-300 rounded-xl border-dashed my-8 mx-10">
      <table className="w-full text-left">
        <thead>
          <tr>
            {productTableHead.map((head) => (
              <th className="pb-3" key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.SN}>
              <td className="py-3 text-left">{product.SN}</td>
              <td className="py-3 text-left">{product.Name}</td>
              <td className="py-3 text-left">{product.Brand}</td>
              <td className="py-3 text-left">{product.Category}</td>
              <td className="py-3 text-left">${product.Price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTabel;
