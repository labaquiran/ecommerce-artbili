import ProductsList from "@/components/products-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center">Our Products</h1>
      <ProductsList />
    </main>
  );
}
