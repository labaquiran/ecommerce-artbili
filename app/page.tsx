export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
        {/* Product cards will go here */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold">Product 1</h2>
          <p className="text-gray-600">Description of Product 1</p>
          <p className="text-2xl font-bold">$19.99</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold">Product 1</h2>
          <p className="text-gray-600">Description of Product 1</p>
          <p className="text-2xl font-bold">$19.99</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold">Product 1</h2>
          <p className="text-gray-600">Description of Product 1</p>
          <p className="text-2xl font-bold">$19.99</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold">Product 1</h2>
          <p className="text-gray-600">Description of Product 1</p>
          <p className="text-2xl font-bold">$19.99</p>
        </div>
      </div>
    </main>
  );
}
