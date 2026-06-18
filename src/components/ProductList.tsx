import type { Product } from "../types/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  onCompare: (product: Product) => void;
  compare: Product[];
}

const ProductList = ({ products, onCompare, compare }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCompare={onCompare}
          isSelected={compare.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
