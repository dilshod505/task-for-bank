import { useEffect, useState } from "react";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { toast, ToastContainer } from "react-toastify";
import ProductsTable from "./components/ProductsTable";
import type { Product } from "./types/products";

function App() {
  const [compare, setCompare] = useState<Product[]>(() => {
    const saved = localStorage.getItem("compare");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);

  const addToTable = (product: Product) => {
    const exists = compare.some((item) => item.id === product.id);

    if (exists) {
      toast.error("This product is already selected", {
        position: "top-right",
        autoClose: 3000,
      });

      return;
    }

    if (compare.length >= 3) {
      toast.error("You can compare a maximum of 3 products", {
        position: "top-right",
        autoClose: 3000,
      });

      return;
    }

    setCompare((prev) => [...prev, product]);

    toast.success(`${product.name} added to comparison`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const removeProduct = (id: number) => {
    setCompare(compare.filter((item) => item.id !== id));
    toast.info("Product removed from comparison", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mx-auto p-5">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <Header />

      <ProductList
        products={products}
        onCompare={addToTable}
        compare={compare}
      />

      <hr />

      <ProductsTable products={compare} onRemove={removeProduct} />
    </div>
  );
}

export default App;
