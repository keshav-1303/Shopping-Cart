import { useState, useEffect, useCallback, useMemo } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // Stable fetch function
  const fetchProductData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setPosts([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  // Memoized grid markup
  const productsGrid = useMemo(
    () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/25 bg-white/10 rounded-xl shadow-lg border border-white/30 hover:bg-white/35 hover:shadow-xl transition-all duration-200 overflow-hidden"
          >
            <Product post={post} />
          </div>
        ))}
      </div>
    ),
    [posts]
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our collection of quality items
          </p>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-white/20 bg-white/10 rounded-2xl shadow-lg border border-white/30 p-12">
              <Spinner />
              <p className="text-gray-600 mt-4">Loading products...</p>
            </div>
          </div>
        ) : posts.length > 0 ? (
          <div>
            {/* Product count */}
            <div className="mb-8 text-center">
              <span className="inline-flex items-center px-4 py-2 bg-white/30 bg-white/10 rounded-full shadow-lg border border-white/40 text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {posts.length} products available
              </span>
            </div>

            {/* Products Grid */}
            {productsGrid}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/25 bg-white/10 rounded-xl shadow-lg border border-white/30 p-12 max-w-md mx-auto">
              <div className="text-4xl mb-4 text-gray-400">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6">
                Unable to load products. Please try again.
              </p>
              <button
                onClick={fetchProductData}
                className="px-6 py-2 bg-white/30 backdrop-blur-md text-gray-800 rounded-lg hover:bg-white/40 transition-all duration-200 font-medium border border-white/40 shadow-lg"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;