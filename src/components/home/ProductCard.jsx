"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product, onAddToCart, onViewMore }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    sold,
    _id
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <figure className="relative h-48">
        <Image
          src={image}
          alt={title}
          width={200}
          height={180}
          className="object-cover"
        />
        {discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating & Sold */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{ratings}</span>
          </div>
          <span>{sold} sold</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Link href={'/add-to-cart'}
          onClick={() => onAddToCart(product)}
          className="btn btn-primary btn-sm mt-3 flex items-center gap-2 w-full"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Link>

        {/* View More */}
        <Link href={`/products/${_id}`}
          onClick={() => onViewMore?.(product._id)}
          className="btn btn-primary btn-outline btn-sm mt-2 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
