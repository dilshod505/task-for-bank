import { MdDeleteOutline } from "react-icons/md";
import type { Product } from "../types/products";

interface Props {
  products: Product[];
  onRemove: (id: number) => void;
}

const ProductsTable = ({ products, onRemove }: Props) => {
  if (!products.length) return null;

  const isDifferent = (key: keyof Product) => {
    const values = products.map((item) => item[key]);
    return new Set(values).size > 1;
  };

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <div className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Product Comparison</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">
                Feature
              </th>

              {products.map((product) => (
                <th key={product.id} className="border-b px-6 py-4 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 object-contain"
                    />

                    <span className="font-semibold text-gray-800">
                      {product.name}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRemove(product.id)}
                      title={`Remove ${product.name} from comparison`}
                      aria-label={`Remove ${product.name} from comparison`}
                      className="rounded-lg bg-red-100 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-200"
                    >
                      <MdDeleteOutline size={18} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr
              className={`border-b ${
                isDifferent("price") ? "bg-yellow-50" : ""
              }`}
            >
              <td className="px-6 py-4 font-medium">Price</td>

              {products.map((product) => (
                <td
                  key={product.id}
                  className="px-6 py-4 text-center font-bold text-emerald-600"
                >
                  ${product.price}
                </td>
              ))}
            </tr>

            <tr
              className={`border-b ${
                isDifferent("memory") ? "bg-yellow-50" : ""
              }`}
            >
              <td className="px-6 py-4 font-medium">Memory</td>

              {products.map((product) => (
                <td key={product.id} className="px-6 py-4 text-center">
                  {product.memory}
                </td>
              ))}
            </tr>

            <tr
              className={`border-b ${
                isDifferent("camera") ? "bg-yellow-50" : ""
              }`}
            >
              <td className="px-6 py-4 font-medium">Camera</td>

              {products.map((product) => (
                <td key={product.id} className="px-6 py-4 text-center">
                  {product.camera}
                </td>
              ))}
            </tr>

            <tr className={`${isDifferent("battery") ? "bg-yellow-50" : ""}`}>
              <td className="px-6 py-4 font-medium">Battery</td>

              {products.map((product) => (
                <td key={product.id} className="px-6 py-4 text-center">
                  {product.battery}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
