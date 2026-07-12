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

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <section className="">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product, index) => (
            <li key={index} className="p-4 rounded-xl shadow">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
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
//     "image": "http://example.com"
//   }
// ]
