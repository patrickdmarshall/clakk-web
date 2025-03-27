// pages/shop.tsx or pages/shop/page.tsx
import { ProductCard } from "@/components/ProductCard"; // Import ProductCard component
import Image from "next/image";

// Fetch product data from Google Sheets using SheetDB API
export async function getServerSideProps() {
  const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_API_ENDPOINT");
  const data = await response.json();

  return {
    props: { items: data }, // Pass fetched data as props
  };
}

export default function ShopPage({ items }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      {/* Display the products in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} /> // Pass each item to the ProductCard component
        ))}
      </div>
    </div>
  );
}
