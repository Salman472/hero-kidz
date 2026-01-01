import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { getSingleProduct } from "@/action/server/product";

const ProductDetails = async ({ params }) => {
  const { id } =await params;
  const product = await getSingleProduct(id);
  console.log(product);

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">
        Product not found
      </div>
    );
  }

  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative w-full ">
        <Image
          src={product?.image}
          alt={product?.title}
          width={500}
          height={400}
          
          className="object-contain rounded-lg shadow"
        />
        {product?.discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            -{product?.discount}%
          </span>
        )}
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product?.title}</h1>

        {/* Rating & Sold */}
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>{product?.ratings}</span>
          </div>
          <span>{product?.sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-primary">
            ৳{discountedPrice}
          </span>
          {product?.discount > 0 && (
            <span className="line-through text-gray-400">
              ৳{product?.price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="btn btn-primary flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button className="btn btn-outline">View More</button>
        </div>

        
      </div>
      <div className="col-span-full">
        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Description</h3>
          <p className="text-gray-700 whitespace-pre-line">
            {product?.description}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Key Features</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {product.info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Q&A */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Q & A</h3>
          <div className="space-y-2">
            {product.qna?.map((qa, i) => (
              <div key={i} className="border rounded p-3 bg-base-200">
                <p className="font-semibold">Q: {qa?.question}</p>
                <p>A: {qa?.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
