import React from "react";

const ProductCard = ({ image, title, price, rating, id, products }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-orange-400" : "text-gray-400"}
      >
        ★
      </span>
    ));

  // const handleAddTimes = () => {
  //   const productData = { id, title, price, rating };
  //   let saved = JSON.parse(localStorage.getItem("savedProducts")) || [];

  //   // Prevent duplicates
  //   const alreadyExists = saved.some((item) => item.id === id);
  //   if (!alreadyExists) {
  //     saved.push(productData);
  //     localStorage.setItem("savedProducts", JSON.stringify(saved));
  //     alert("Product saved!");
  //   } else {
  //     alert("Product already saved.");
  //   }
  // };

  const handleAddToCart = ({ products }) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productExists = cartItems.find((item) => item.id === id);

    if (productExists) {
      productExists.quantity += 1;
    } else {
      const productToAdd = products.find((product) => product.id === id);
      cartItems.push({ ...productToAdd, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="bg-white w-56 p-5 rounded-2xl shadow-md text-center m-3">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 mx-auto object-contain mb-3"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
      <h3 className="text-lg font-bold text-gray-700 mt-2">${price}</h3>
      <div className="my-2">{stars}</div>
      <button
        className="text-white px-4 py-2 rounded-lg w-full bg-[#0ea5e9] hover:bg-[#2e77ff]"
        onClick={() => handleAddToCart({ products })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

//The data of the card for which you click the Add Times button will be saved in local storage.
