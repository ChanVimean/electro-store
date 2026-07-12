import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({
  id,
  title,
  price,
  stock,
  sold,
  category,
  description,
  image,
}) => {
  return (
    <div>
      <div key={id} className="border rounded p-4 space-y-2">
        <img src={image} alt={title} className="h-40 w-full object-contain" />
        <h2 className="font-semibold">{title}</h2>
        <h2>Category: {category}</h2>
        <div className="flex justify-between items-center">
          <p className="font-bold">${price}</p>
          <FaCartPlus size={20} className="cursor-pointer" onClick={() => {}} />
        </div>
        <p className="text-sm text-gray-500">
          Stock: {stock} | Sold: {sold}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

// {
//   id: "1",
//   title: "Laptop Rog Strix G16",
//   price: 1299.99,
//   stock: 10, // Quantity
//   sold: 50,
//   category: "laptop",
//   description: "Gaming laptop with 16-inch display and RGB keyboard.",
//   image: "https://placehold.co/400x400/eee/333?text=Rog+Strix+G16",
// },
