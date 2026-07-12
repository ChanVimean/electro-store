// import { products } from "../data/products";
// import ProductCard from "../components/ProductCard";

// const Product = () => {
//   // Temporary Categories
//   const categories = [
//     "All",
//     "Laptop",
//     "Phone",
//     "Watch",
//     "Mouse",
//     "Adaptor",
//     "Monitor",
//   ];

//   return (
//     <div className="p-8 space-y-6">
//       {/* 1. Header */}
//       <section className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Products</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-64 border rounded px-3 py-1"
//         />
//       </section>

//       {/* 2. Categories */}
//       <section>
//         <ul className="flex gap-2 overflow-x-auto">
//           {categories.map((category, index) => (
//             <li
//               key={index}
//               onClick={() => {}}
//               className="border rounded px-3 py-1 cursor-pointer hover:bg-gray-100"
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* 3. Content */}
//       {/* Responsive: SM: 2, MD: 3, LG: 4 */}
//       {/* <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border rounded p-4 space-y-2">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-40 w-full object-contain"
//             />
//             <h2 className="font-semibold">{product.title}</h2>
//             <div className="flex justify-between items-center">
//               <p className="font-bold">${product.price}</p>
//               <FaCartPlus size={20} className="cursor-pointer" onClick={() => {}} />
//             </div>
//             <p className="text-sm text-gray-500">
//               Stock: {product.stock} | Sold: {product.sold}
//             </p>
//           </div>
//         ))}
//       </section> */}

//       <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map((product) => (
//           <ProductCard
//             id={product.id}
//             title={product.title}
//             category={product.category}
//             description={product.description}
//             image={product.image}
//             price={product.price}
//             sold={product.sold}
//             stock={product.stock}
//           />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Product;

// Product API

import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      setProducts(data);
      setCategories(["All", ...new Set(data.map((p) => p.category))]);
    };

    fetch();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <p className="text-sm text-gray-500">Browse our latest collection</p>
      </section>

      {/* Categories */}
      <section>
        <ul className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-colors hover:cursor-pointer ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white shadow"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-100 hover:text-amber-600"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Products */}
      <section className="">
        {/* <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
        <ul className="columns columns-2 md:columns-3 lg:columns-5 gap-4">
          {/* {products.map((product, index) => ( */}
          {filteredProducts.map((product, index) => (
            <li
              key={index}
              className="group mb-4 flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Image */}
              <div className="p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-4 space-y-2 border-t border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {product.category}
                </p>
                <h2 className="font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <p className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </p>
                  <p className="flex items-center space-x-1 text-sm text-gray-600">
                    <FaStar className="text-amber-400" />

                    <span>{product.rating.rate}</span>
                    <span className="text-gray-400">({product.rating.count})</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Product;

// [
//   {
//     "id": 0,
//     "title": "string",
//     "price": 0.1,
//     "description": "string",
//     "category": "string",
//     "image": "http://example.com",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }
// ]
