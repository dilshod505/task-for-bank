import type { Product } from "../types/products";

interface Props {
  product: Product;
  onCompare: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard = ({ product, onCompare, isSelected }: Props) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-emerald-600">
            ${product.price}
          </p>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Available
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Memory</span>
            <span className="font-medium text-gray-800">{product.memory}</span>
          </div>

          <div className="flex justify-between">
            <span>Camera</span>
            <span className="font-medium text-gray-800">{product.camera}</span>
          </div>

          <div className="flex justify-between">
            <span>Battery</span>
            <span className="font-medium text-gray-800">{product.battery}</span>
          </div>
        </div>

        <button
          disabled={isSelected}
          onClick={() => onCompare(product)}
          className={`mt-5 w-full rounded-xl py-3 font-semibold text-white shadow-lg transition-all duration-300
          ${
            isSelected
              ? "cursor-not-allowed bg-gray-400"
              : "cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          }
        `}
        >
          {isSelected ? "Selected ✅" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
