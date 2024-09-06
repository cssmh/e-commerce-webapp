import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const chairs = [
    {
      id: 1,
      name: "Rocking Chair",
      image:
        "https://m.media-amazon.com/images/I/81cnVBZ+48S._AC_UF894,1000_QL80_.jpg",
      price: 100,
      discount: "30% Off",
      description: "Comfortable rocking chair with modern design.",
    },
    {
      id: 2,
      name: "Side Chair",
      image: "https://m.media-amazon.com/images/I/715jjU2Qo+L._AC_SL1000_.jpg",
      price: 150,
      discount: "30% Off",
      description: "Stylish side chair perfect for any dining room.",
    },
    {
      id: 3,
      name: "Lounge Chair",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKj92T39cMH7X04kaNJcXQRJWAjuboc_6lw&s",
      price: 200,
      discount: "30% Off",
      description: "Luxurious lounge chair for ultimate relaxation.",
    },
    {
      id: 4,
      name: "Rocking Chair",
      image:
        "https://m.media-amazon.com/images/I/81cnVBZ+48S._AC_UF894,1000_QL80_.jpg",
      price: 100,
      discount: "30% Off",
      description: "Comfortable rocking chair with modern design.",
    },
    {
      id: 5,
      name: "Side Chair",
      image: "https://m.media-amazon.com/images/I/715jjU2Qo+L._AC_SL1000_.jpg",
      price: 150,
      discount: "30% Off",
      description: "Stylish side chair perfect for any dining room.",
    },
    {
      id: 6,
      name: "Lounge Chair",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKj92T39cMH7X04kaNJcXQRJWAjuboc_6lw&s",
      price: 200,
      discount: "30% Off",
      description: "Luxurious lounge chair for ultimate relaxation.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <ul className="space-y-4">
          <li>
            <Link
              to="/rocking-chair"
              className={`text-blue-500 hover:underline px-2 py-1 rounded-md ${
                location.pathname === "/rocking-chair"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Rocking Chair
            </Link>
          </li>
          <li>
            <Link
              to="/side-chair"
              className={`text-blue-500 hover:underline px-2 py-1 rounded-md ${
                location.pathname === "/side-chair" ? "bg-black text-white" : ""
              }`}
            >
              Side Chair
            </Link>
          </li>
          <li>
            <Link
              to="/lounge-chair"
              className={`text-blue-500 hover:underline px-2 py-1 rounded-md ${
                location.pathname === "/lounge-chair"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Lounge Chair
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side - Chair Cards */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={chair.image}
              alt={chair.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{chair.name}</h2>
            <p className="text-gray-500 mb-1">${chair.price}</p>
            <p className="text-red-500 mb-2">{chair.discount}</p>
            <p className="text-gray-600 mb-4">{chair.description}</p>
            <button className="w-full bg-black text-white py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
